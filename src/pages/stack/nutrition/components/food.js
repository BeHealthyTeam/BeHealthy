import { useState } from "react";
import { View, Text} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import alimentoObjectStyle from "../../../../styles/componentObjects/alimentoObjectStyle";

export default function Food(props){
    return(
        <View style={alimentoObjectStyle.container}>
            <Text style={alimentoObjectStyle.label}>{props.food.name}</Text>{/* food.name == nome objeto antigo*/}
            <View style={alimentoObjectStyle.item}>
                <TextInput style={alimentoObjectStyle.qtdInput}
                onEndEditing={
                    (textValue) => {
                        if(props.ingredients.find(x => x.id === props.food.id)){
                            const posicaoObjetoNoArray = (props.ingredients.indexOf(
                                props.ingredients.find(x => x.id === props.food.id)))

                            const oldIngredient = props.ingredients.find(x => x.id === props.food.id);

                            if(textValue.nativeEvent.text != ""){
                                let ingredient = new Object();
                                ingredient.food = oldIngredient;
                                ingredient.quantity = textValue.nativeEvent.text;
                                
                                props.ingredients[posicaoObjetoNoArray] = ingredient;
                            }
                        }
                        console.log(props.ingredients);
                    }
                }
                >
                </TextInput>
                <View style={alimentoObjectStyle.unityContent}>
                    <Text style={alimentoObjectStyle.label}>{props.food.unity}</Text>
                </View>
            </View>
        </View>
    )
}