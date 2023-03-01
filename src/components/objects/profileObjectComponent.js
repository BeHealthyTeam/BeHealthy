import React from "react"
import { View, Text, SafeAreaView} from "react-native"
import { Image } from "react-native-elements"
import Ionicons from '@expo/vector-icons/Ionicons'

import profileComponentStyle from "../../styles/componentObjects/profileComponentStyle"
import { Pressable } from "react-native"

export default function ProfileObjectComponent({navigation}){
    return(
        <SafeAreaView style={profileComponentStyle.background}>
            <View style={profileComponentStyle.profileImageContainer}>
                <Image source={{uri:'https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2022/11/escanor.webp'}}
                style={profileComponentStyle.profileImage}/>
            </View>
            <View style={profileComponentStyle.profileTitlesContent}>
                <Text style={profileComponentStyle.profileTitleLabel}>DR. HANS CHUCRUTE</Text>
            </View>
            <View style={profileComponentStyle.textContainer}>
                <View style={profileComponentStyle.textContent}>
                    <View style={profileComponentStyle.textRow}>
                        <View style={profileComponentStyle.textColumnTitle}>
                            <Text style={profileComponentStyle.labelTitle}>Nome:</Text>
                            <Text style={profileComponentStyle.labelTitle}>E-mail:</Text>
                            <Text style={profileComponentStyle.labelTitle}>CRN:</Text>
                            <Text style={profileComponentStyle.labelTitle}>Teste:</Text>
                        </View>
                        <View style={profileComponentStyle.textColumnData}>
                            <Text style={profileComponentStyle.labelData}>Gabs</Text>
                            <Text style={profileComponentStyle.labelData}>gabs.golds.eu@gmail.com</Text>
                            <Text style={profileComponentStyle.labelData}>109030</Text>
                            <Text style={profileComponentStyle.labelData}>Taaaaaaa</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={profileComponentStyle.buttons}>
                <Pressable onPress={() => alert("Clicado")}>
                    <Ionicons name="create-outline" style={profileComponentStyle.editIcon} size={30}/>
                </Pressable>
                <Pressable onPress={() => alert("Clicado")}>
                    <Ionicons name="log-out-outline" style={profileComponentStyle.logOutIcon} size={30}/>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

