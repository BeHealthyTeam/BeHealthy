import { useState } from "react";
import { View, Text} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import alimentoObjectStyle from "../../styles/componentObjects/alimentoObjectStyle";

export default function Refeicao(props){
    return(
        <View style={alimentoObjectStyle.item}>
            <Text style={alimentoObjectStyle.label}>{props.refeicao.alimento.nome}</Text>{/* food.alimento.nome == nome objeto antigo*/}
            <TextInput style={alimentoObjectStyle.qtdInput} placeholder="qtd."
            onEndEditing={
                (textValue) => {
                    if(props.ingredientes.find(x => x.id === props.refeicao.id)){ 
                        const posicaoObjetoNoArray = (props.ingredientes.indexOf(
                            props.ingredientes.find(x => x.id === props.refeicao.id)))

                        const antigoIngrediente = props.ingredientes.find(x => x.id === props.food.id);

                        if(textValue.nativeEvent.text != ""){
                            let ingrediente = new Object();
                            ingrediente.alimento = antigoIngrediente;
                            ingrediente.quantidade = textValue.nativeEvent.text;
                            
                            props.ingredientes[posicaoObjetoNoArray] = ingrediente;
                        }
                    }
                    console.log(props.ingredientes);
                }
            }
            >
            </TextInput>
        </View>
    )
}