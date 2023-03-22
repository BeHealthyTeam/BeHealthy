import {React, useContext, useState, useEffect} from "react";
import {View, Text, SafeAreaView} from "react-native";
import { Image } from "react-native-elements";

import AuthenticationBackgroundComponent from "../../components/utils/authenticationBackgroundComponent";
import authPagesStyle from "../../styles/pages/authentication/authPagesStyle";

export default function LoadignScreen({navigation, route}){
    return(
        <SafeAreaView style = {authPagesStyle.background}>
            <View style = {authPagesStyle.logoContainer}>
                <Image source={require("../../images/BeHealthyLogo.png")}
                style = {authPagesStyle.logo}/>
            </View>
            <View style = {authPagesStyle.loadingGifContainer}>
                <Image source={require("../../images/BeHealthyLoadingFast.gif")}
                style = {authPagesStyle.loadingGif}/>
                <Text style = {authPagesStyle.labelBeinghealthy}>Sendo Saudável...</Text>
            </View>
        </SafeAreaView>
    )
}