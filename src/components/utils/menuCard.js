import { View, Text, Pressable} from "react-native"

import menuCardStyle from "../../styles/componenetUtils/menuCardStyle";

export default function MenuCard(props){ // FALTA!!!!! passar navigation
    
    return(

        <View style = {menuCardStyle.container}>
            <Text style = {menuCardStyle.titleLabel}>{props.moduleName}</Text>
            <View style = {menuCardStyle.moduleBackground}>
                {
                    props.children
                }
            </View>
        </View>
        
    )
}
