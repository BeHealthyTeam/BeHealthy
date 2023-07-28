import { Pressable, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

import modulesStyle from "../../styles/componentModules/modulesStyle";

export default function Clients(props){
    return(
        <View style = {modulesStyle.iconContent}>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={()=> console.log("Cliquei")}
            >
                <Ionicons name="people-outline" style={modulesStyle.icon}/>
            </Pressable>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={()=> console.log("Cliquei")}
            >
                <Ionicons name="podium-outline" style={modulesStyle.icon}/>
            </Pressable>
        </View>
    )
}