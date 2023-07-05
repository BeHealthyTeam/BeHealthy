import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Auth } from "aws-amplify";
import { useForm, Controller } from "react-hook-form";

import AuthenticationBackgroundComponent from "../../components/utils/authenticationBackgroundComponent";
import authPagesStyle from "../../styles/pages/authentication/authPagesStyle";
import ConfirmSignUpPopUp from "../../modals/confirmSignUpPopUp";

export default function Register({navigation, route}){

    const {control, handleSubmit, formState: {errors}} = useForm({})
    const [confirmEmailPopup, setConfirmEmailPopup] = useState(false)
    const [isBlocked, setIsBlocked] = useState(false)
    const [timestemp, setTimestemp] = useState(0)

    async function verifyTimer() {
        if(isBlocked){
            if(timestemp + 600000 < Date.now()){ //timestep + 10 min to release the button
                setIsBlocked(false)
            }
        }
        else{
            setTimestemp(Date.now())
            setIsBlocked(true)
        }
    }

    async function signUp(data) {
        try {
          await Auth.signUp({
            username: data.email,
            password: data.password,
          });
          alert("Sucesso ao se registrar! \n\nVerifique o codigo no seu e-mail: \n\n" + data.email)
          setConfirmEmailPopup(!confirmEmailPopup)
        } catch (e) {
          alert('Woops! '+ e.message);
        }
      }

    return(
    <AuthenticationBackgroundComponent
        labelButton = "Cadastrar"
    >
        <ScrollView>
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
                name="confirmEmail"
                render={({ field: { onChange, onBlur, value} })=>(
                    <TextInput
                        style= {authPagesStyle.inputText}
                        onChangeText = {onChange}
                        onBlur = {onBlur}
                        value = {value}
                        placeholder = "Confirme o e-mail"
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
            onPress={() => navigation.navigate('Login')}
            >
                <View style = {authPagesStyle.viewRegisterLabels}>
                    <Text style = {authPagesStyle.registerLabel}>Já possui conta? </Text>
                    <Text style = {authPagesStyle.registerLabelLink}>Login</Text>
                </View>
            </Pressable>

            
            <Pressable
                style={authPagesStyle.pressableText}
                onPress={
                    () => 
                    {
                        if(control._formValues.email !== "" && control._formValues.confirmEmail !== "" && control._formValues.password !== ""){
                            if(control._formValues.email === control._formValues.confirmEmail){
                                signUp(control._formValues)
                            }else{
                                alert("Whoops! E-mails não conferem.")
                            }
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
            onPress={() => setConfirmEmailPopup(!confirmEmailPopup)}
            >
                <View style = {authPagesStyle.viewConfirmEmail}>
                    <Text style = {authPagesStyle.registerLabel}>Já possui registro? </Text>
                    <Text style = {authPagesStyle.registerLabelLink}>Confirme o seu e-mail!</Text>
                </View>
            </Pressable>

            <ConfirmSignUpPopUp
                confirmEmailPopup = {confirmEmailPopup}
                setConfirmEmailPopup = {setConfirmEmailPopup}
                email = {control._formValues.email}
                navigation = {navigation}
                verifyTimer = {verifyTimer}
                isBlocked = {isBlocked}
                timestemp = {timestemp}
            />
        </ScrollView>
    </AuthenticationBackgroundComponent>
    )
}