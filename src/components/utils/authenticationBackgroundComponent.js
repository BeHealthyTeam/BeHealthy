import React from "react";
import { SafeAreaView, View, Text, Pressable} from "react-native";
import { Image } from "react-native-elements";

import authBackground from "../../styles/pages/authentication/authBackground";

export default function AuthenticationBackgroundComponent(props, ref){
    return(
    <SafeAreaView style = {authBackground.background}>
        <View style = {authBackground.logoContainer}>
            <Image source={require("../../images/BeHealthyLogo.png")}
            style = {authBackground.logo}/>
        </View>
        {
            props.children
        }
    </SafeAreaView>
    )
}