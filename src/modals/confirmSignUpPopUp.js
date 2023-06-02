import { View, Text, Modal, TextInput, Pressable} from "react-native"
import {React, } from "react"
import { Auth } from "aws-amplify";
import { useForm, Controller } from "react-hook-form";


import popupStyle from "../styles/modals/popupStyle"
import authPagesStyle from "../styles/pages/authentication/authPagesStyle";

export default function ConfirmSignUpPopUp(props){
    
    const {control, handleSubmit, formState: {errors}} = useForm({})

    async function confirmSignUp(data) {
        try {
          await Auth.confirmSignUp(data.validateEmail, data.code);
          props.navigation.navigate('Login')
        } catch (error) {
          alert("Whoops! "+ error.message);
        }
      }
    async function resendCode(data) {
        console.log(data)
        try{
            await Auth.resendSignUp(data.validateEmail);
            alert('Success!', 'Code was resent to your email');
        }catch(e){
            alert("Whoops! "+ e.message);
        }
    }
    async function msToMinutes() {
        const now = Date.now();
        const diff = now - props.timestemp;
        const diffMin = Math.round(diff / 60000);
        return diffMin;
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
                        name="validateEmail"
                        render={({ field: { onChange, onBlur, value} })=>(
                            <TextInput
                                style= {authPagesStyle.inputText}
                                value = {value}
                                onChangeText = {onChange}
                                onBlur = {onBlur}
                                defaultValue= {props.email}
                                placeholder = "E-mail"

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
                            />
                        )}
                    />
                    </View>
                    <Pressable
                        style={authPagesStyle.pressableText}
                        onPress={
                            () => {
                                if(control._formValues.email !== "" && control._formValues.code !== ""){
                                    confirmSignUp(control._formValues)
                                }
                                else{
                                    alert("Whoops! Preencha todos os campos.")
                                }
                            }
                        }
                    >
                        <Text style={authPagesStyle.submitText}>Confirmar</Text> 
                    </Pressable>
                    <Pressable
                    onPress={
                        () => {
                            if(control._formValues.validateEmail !== ""){
                                props.verifyTimer()
                                if(!props.isBlocked){
                                    resendCode(control._formValues)
                                }
                                else{
                                    alert("Whoops! Aguarde " + msToMinutes()._z + " minuto(s) para reenviar o código novamente.")
                                }
                            }else{
                                alert("Whoops! Preencha o campo de e-mail.")
                            }
                        }
                    }
                    >
                        <View style = {authPagesStyle.viewConfirmEmail}>
                            <Text style = {authPagesStyle.registerLabel}>Problemas com o código? </Text>
                            <Text style = {authPagesStyle.registerLabelLink}>Reenviar!</Text>
                        </View>
                    </Pressable>
                    
                    </View>

            </Modal>
    )
}