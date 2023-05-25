import { View, Text, StatusBar, Modal, TextInput, Pressable} from "react-native"
import {React, useState} from "react"
import Ionicons from '@expo/vector-icons/Ionicons'
import { Auth } from "aws-amplify";
import { useForm, Controller } from "react-hook-form";


import popupStyle from "../styles/modals/popupStyle"
import authPagesStyle from "../styles/pages/authentication/authPagesStyle";

export default function ConfirmSignUpPopUp(props){
    
    const {control, handleSubmit, formState: {errors}} = useForm({})

    async function confirmSignUp(data) {
        try {
          await Auth.confirmSignUp(props.email, data.code);
          props.navigation.navigate('Login')
        } catch (error) {
          console.log('error confirming sign up', error);
        }
      }

    return(
            <Modal
                animationType="fade"
                transparent = {true}
                visible = {props.confirmEmailPopup}
                style = {popupStyle.modalBackGround}
                onRequestClose={() => {
                    props.setConfirmEmailPopup(!props.confirmEmailPopup);
                }}
                >

                <Pressable 
                style = {popupStyle.modalBackGround}
                onPress= {
                    () => props.setConfirmEmailPopup(!props.confirmEmailPopup)
                }
                >
                </Pressable>
                
                <View style={popupStyle.modalOrderByContainer}>
                    <View style={popupStyle.fieldsContainer}>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value} })=>(
                            <TextInput
                                style= {authPagesStyle.inputText}
                                value = {props.email}
                                defaultValue= {props.email}
                                editable={false}

                            />
                        )}
                    />
        
                    <Controller
                        control={control}
                        name="code"
                        render={({ field: { onChange, onBlur, value} })=>(
                            <TextInput
                                style= {authPagesStyle.inputText}
                                onChangeText = {onChange}
                                onBlur = {onBlur}
                                value = {value}
                                placeholder = "Código"
                                secureTextEntry={true}
                            />
                        )}
                    />
                    </View>
                    <Pressable
                        style={authPagesStyle.pressableText}
                        onPress={handleSubmit(confirmSignUp)}
                    >
                        <Text style={authPagesStyle.submitText}>Confirmar</Text> 
                    </Pressable>
                    
                    </View>

            </Modal>
    )
}