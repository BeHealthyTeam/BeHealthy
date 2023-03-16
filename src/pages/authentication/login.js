import React from "react";
import {View, Text, Pressable} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';

import AuthenticationBackgroundComponent from "../../components/utils/authenticationBackgroundComponent";
import authPagesStyle from "../../styles/pages/authentication/authPagesStyle";

export default function Login({navigation, route}){
    const {isAuthenticated} = route.params
    
    return(
    <AuthenticationBackgroundComponent
    >
        <View style= {authPagesStyle.container}>
            <TextInput style= {authPagesStyle.inputText} placeholder="E-mail"/>
            <TextInput style= {authPagesStyle.inputText} placeholder="Senha"/>
        </View>
        <Pressable
        onPress={() => navigation.navigate('Register')}
        >
            <Text style = {authPagesStyle.registerLabel}>Registre-se</Text>
        </Pressable>
        <Text style = {authPagesStyle.quickAcessLabel}>Acesso Rápido</Text>
        <View style = {authPagesStyle.quickAccessContainer}>
            <View style={authPagesStyle.quickAccessIconsContainer}>
                <Pressable
                onPress={()=> alert("logar com FACEBOOK")}
                >
                    <Ionicons name="logo-facebook" size={40} style={authPagesStyle.quickAccessIcons}/>
                </Pressable>
                <Pressable
                onPress={()=> alert("logar com GOOGLE")}
                >
                    <Ionicons name="logo-google" size={40} style={authPagesStyle.quickAccessIcons}/>
                </Pressable>
                <Pressable
                onPress={()=> alert("logar com INSTAGRAM")}
                >
                    <Ionicons name="logo-instagram" size={40} style={authPagesStyle.quickAccessIcons}/>
                </Pressable>
            </View>
        </View>
        <Pressable
            style={authPagesStyle.pressableText}
            onPress={
                () => {
                    navigation.setParams({
                        isAuthenticated: true
                    })
                }
            }
        >
            <Text style={authPagesStyle.submitText}>Confirmar</Text>
        </Pressable>
    </AuthenticationBackgroundComponent>
    )
}