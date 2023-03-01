import { View, Text, Pressable} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

import menuCardStyle from "../../styles/componenetUtils/menuCardStyle";


export default function MenuCard(props){ //passar navigation
    
    return(
            <View style = {menuCardStyle.container}>
                <Text style = {menuCardStyle.titleLabel}>{props.moduleName}</Text>
                <View style = {menuCardStyle.moduleBackground}>
                    <View style = {menuCardStyle.iconContent}>
                        <Pressable style = {menuCardStyle.inconPressable}
                            onPress={()=> console.log("Cliquei")}
                            >
                                <Ionicons name="log-out-outline" style={menuCardStyle.icon} size={50}/>
                        </Pressable>
                        <Pressable style = {menuCardStyle.inconPressable}
                            onPress={()=> console.log("Cliquei")}
                            >
                                <Ionicons name="log-out-outline" style={menuCardStyle.icon} size={50}/>
                        </Pressable>
                        <Pressable style = {menuCardStyle.inconPressable}
                            onPress={()=> console.log("Cliquei")}
                            >
                                <Ionicons name="log-out-outline" style={menuCardStyle.icon} size={50}/>
                        </Pressable>
                        <Pressable style = {menuCardStyle.inconPressable}
                            onPress={()=> console.log("Cliquei")}
                            >
                                <Ionicons name="log-out-outline" style={menuCardStyle.icon} size={50}/>
                        </Pressable>                    

                    </View>
                </View>
            </View>
        
    )
}
