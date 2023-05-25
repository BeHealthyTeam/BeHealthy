import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Auth } from "aws-amplify";
import { useForm, Controller } from "react-hook-form";

import AuthenticationBackgroundComponent from "../../components/utils/authenticationBackgroundComponent";
import authPagesStyle from "../../styles/pages/authentication/authPagesStyle";
import ConfirmSignUpPopUp from "../../modals/confirmSignUpPopUp";

export default function Register({navigation, route}){

    const {control, handleSubmit, formState: {errors}} = useForm({})
    const [email, setEmail] = useState('');
    const [confirmEmailPopup, setConfirmEmailPopup] = useState(true)
   
    async function signUp(data) {
        try {
          const { user } = await Auth.signUp({
            username: data.email,
            password: data.password,
           
          });
          console.log(user);
          setEmail(data.email)
          setConfirmEmailPopup(!confirmEmailPopup);
        } catch (error) {
          console.log('error signing up:', error);
        }
      }

    return(
    <AuthenticationBackgroundComponent
        labelButton = "Cadastrar"
    >
        <View style= {authPagesStyle.containerRegister}>
        <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value} })=>(
                <TextInput
                    style= {authPagesStyle.inputText}
                    onChangeText = {onChange}
                    onBlur = {onBlur}
                    value = {value}
                    placeholder = "E-mail"
                />
            )}
        />
        
        <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value} })=>(
                <TextInput
                    style= {authPagesStyle.inputText}
                    onChangeText = {onChange}
                    onBlur = {onBlur}
                    value = {value}
                    placeholder = "Senha"
                    secureTextEntry={true}
                />
            )}
        />


        </View>
        <Pressable
            style={authPagesStyle.pressableText}
            onPress={handleSubmit(signUp)}
        >
            <Text style={authPagesStyle.submitText}>Confirmar</Text> 
        </Pressable>

        <ConfirmSignUpPopUp
            confirmEmailPopup = {confirmEmailPopup}
            setConfirmEmailPopup = {setConfirmEmailPopup}
            email = {email}
            navigation = {navigation}
        />
    </AuthenticationBackgroundComponent>
    )
}