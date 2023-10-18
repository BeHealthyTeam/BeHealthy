import { useState } from "react";
import { View, Text} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import alimentoObjectStyle from "../../../../styles/componentObjects/alimentoObjectStyle";

export default function Meal(props){
    return(
        <View style={alimentoObjectStyle.item}>
            <Text style={alimentoObjectStyle.label}>{props.meal.name}</Text>{/* food.alimento.nome == nome objeto antigo*/}
            <TextInput style={alimentoObjectStyle.qtdInput} placeholder="qtd."
            onEndEditing={
                (textValue) => {
                    if(props.meals.find(x => x.id === props.meals.id)){ 
                        const posicaoObjetoNoArray = (props.meals.indexOf(
                            props.meals.find(x => x.id === props.meal.id)))

                        const oldMeal = props.meals.find(x => x.meal.id === props.meal.id);
                        
                        if(textValue.nativeEvent.text != ""){
                            console.log("oldMeal")
                            console.log(oldMeal)
                            let Meal = oldMeal;
                            Meal.meal.mealQuantity = textValue.nativeEvent.text;
                            props.meals[posicaoObjetoNoArray] = Meal;
                        }
                    }
                }
            }
            >
            </TextInput>
        </View>
    )
}