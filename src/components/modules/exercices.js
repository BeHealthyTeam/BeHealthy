import { Pressable, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

import modulesStyle from "../../styles/componentModules/modulesStyle";

export default function Exercices(props){
    return(
        <View style = {modulesStyle.iconContent}>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={()=> console.log("Cliquei")}
            >
                <Ionicons name="barbell-outline" style={modulesStyle.icon}/>
            </Pressable>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={()=> console.log("Cliquei")}
            >
                <Ionicons name="create-outline" style={modulesStyle.icon}/>
            </Pressable>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={()=> console.log("Cliquei")}
            >
                <Ionicons name="checkmark-done-outline" style={modulesStyle.icon}/>
            </Pressable>
        </View>
    )
}