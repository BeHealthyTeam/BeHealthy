import { View, Text, Pressable} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from "react";


import api from "../../services/api";
import topFiveCardStyle from "../../styles/componenetUtils/topFiveCardStyle";


export default function TopFiveCard(props){

    return(
        <View style = {topFiveCardStyle.container}>
            <Text style = {topFiveCardStyle.titleLabel}>{props.title}</Text>
            <Pressable style = {topFiveCardStyle.content}
                onPress={()=> console.log("Cliquei")}
            >
                <View style={topFiveCardStyle.textContent}>
                    <Text style={topFiveCardStyle.contentLabel}>1º Lasanha - 50 pontos</Text>
                    <Text style={topFiveCardStyle.contentLabel}>2º Batata doce e frango - 45 pontos</Text>
                    <Text style={topFiveCardStyle.contentLabel}>3º Pasta de amendoim e pão - 30 pontos</Text>
                    <Text style={topFiveCardStyle.contentLabel}>4º Strogonoff - 20 pontos</Text>
                    <Text style={topFiveCardStyle.contentLabel}>5º Leite com batata doce e limão - 10 pontos</Text>
                </View>
                <Text style={topFiveCardStyle.seeMoreText}> Ver mais... </Text>
            </Pressable>
        </View>
    )
}
