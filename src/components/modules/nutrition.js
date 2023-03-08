import { Pressable, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import Icon from 'react-native-ionicons'

import modulesStyle from "../../styles/componentModules/modulesStyle";

export default function Nutrition(props){
    return(
        
        <View style = {modulesStyle.iconContent}>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={() =>  props.navigation.navigate('CreateFood')}
            >
                <Ionicons name="nutrition-outline" style={modulesStyle.icon} size={50}/>
            </Pressable>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={() => props.navigation.navigate('CreateRecipe')}
            >
                <Ionicons name="receipt-outline" style={modulesStyle.icon} size={45}/>
            </Pressable>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={()=> props.navigation.navigate('NutritionDiary')}
            >
                <Ionicons name="checkmark-done-outline" style={modulesStyle.icon} size={50}/>
            </Pressable>
            <Pressable style = {modulesStyle.iconPressable}
                onPress={()=> alert("Em desenvolvimento, criar dieta")}
            >
                <Ionicons name="create-outline" style={modulesStyle.icon} size={52}/>
            </Pressable>
        </View>
    )
}