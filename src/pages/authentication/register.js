import React from "react";
import { SafeAreaView, View, Text, Pressable} from "react-native";
import { Image } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';

import AuthenticationBackgroundComponent from "../../components/utils/authenticationBackgroundComponent";
import authPagesStyle from "../../styles/pages/authentication/authPagesStyle";

export default function Login({navigation}){
    return(
    <AuthenticationBackgroundComponent
        labelButton = "Cadastrar"
    >
        <View style= {authPagesStyle.containerRegister}>
            <TextInput style= {authPagesStyle.inputText} placeholder="E-mail"/>
            <TextInput style= {authPagesStyle.inputText} placeholder="Confirme seu e-mail"/>
            <TextInput style= {authPagesStyle.inputText} placeholder="Senha"/>
        </View>
    </AuthenticationBackgroundComponent>
    )
}