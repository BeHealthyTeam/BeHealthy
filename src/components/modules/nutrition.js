import { Pressable, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

import modulesStyle from "../../styles/componentModules/modulesStyle";

export default function Nutrition(props){
    return(
        
        <View style = {modulesStyle.iconContent}>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={() =>  props.navigation.navigate('CreateFood')}
            >
                <Ionicons name="nutrition-outline" style={modulesStyle.icon}/>
            </Pressable>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={() => props.navigation.navigate('CreateRecipe')}
            >
                <Ionicons name="receipt-outline" style={modulesStyle.icon} />
            </Pressable>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={()=> props.navigation.navigate('ControlCalendar')}
            >
                <Ionicons name="checkmark-done-outline" style={modulesStyle.icon} />
            </Pressable>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={()=> alert("Em desenvolvimento, criar dieta")}
            >
                <Ionicons name="create-outline" style={modulesStyle.icon} />
            </Pressable>
        </View>
    )
}