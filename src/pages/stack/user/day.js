import { View, Text, SafeAreaView, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

import formsBackgroundStyle from "../../../styles/forms/formsBackgroundStyle";
import dayStyle from "../../../styles/pages/stack/dayStyle";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import AddMeal from "../nutrition/components/addMeal";

export default function Day({ navigation, route}) {

    const { fullDate } = route.params; // Access the passed parameter
    const [addMealModal, setAddMealModal] = useState(false)

    function verifyMonth(monthNumber){
        switch (monthNumber) {
            case 1:
                return "Janeiro"
                break;
            case 2:
                return "Fevereiro"
                break;
            case 3:
                return "Março"
                break;
            case 4:
                return "Abril"
                break;
            case 5:
                return "Maio"
                break;
            case 6:
                return "Junho"
                break; 
            case 7:
                return "Julho"
                break;
            case 8:
                return "Agosto"
                break;
            case 9:
                return "Setembro"
                break;
            case 10:
                return "Outubro"
                break;
            case 11:
                return "Novembro"
                break; 
            case 12:
                return "Dezembro"
                break; 
            default:
                break;
        }
    }

    const mealData = [
        {"mealId": 0, "dayTurn": "manhã", 
        "foods": [
            {"id": "64c29207a8fdd4750c373ca9","name": "BANANA", "unity": "mg", "quantity": 400},
            {"id": "64c29207a8fdd4750c373ca10","name": "Leite", "unity": "ml", "quantity": 500},
        ],},
        {"mealId": 1, "dayTurn": "tarde", 
        "foods": [
            {"id": "64c29207a8fdd4750c373ca11","name": "Strogonoff", "unity": "g", "quantity": 200},
            {"id": "64c29207a8fdd4750c373ca12","name": "Arroz", "unity": "g", "quantity": 500},
        ],},
        {"mealId": 2, "dayTurn": "noite", 
        "foods": [
            {"id": "64c29207a8fdd4750c373c13","name": "Chá", "unity": "l", "quantity": 1},
            {"id": "64c29207a8fdd4750c373c14","name": "Bolacha", "unity": "g", "quantity": 300},
        ],},
        
    ]
    const exerciceData = []
    const psychologicalData = []

    return (
        <ScrollView style={formsBackgroundStyle.background}>
            <View style={dayStyle.dataStringContent}>
                <Text style={dayStyle.dateLabel}>{fullDate.day}</Text>
                <Text style={dayStyle.dateLabel}>de</Text>
                <Text style={dayStyle.dateLabel}>{verifyMonth(fullDate.month)}</Text>
                <Text style={dayStyle.dateLabel}>de</Text>
                <Text style={dayStyle.dateLabel}>{fullDate.year}</Text> 
            </View>
            <View style={dayStyle.moduleContent}>
                <Text style={dayStyle.titleLabel}>NUTRICIONAL</Text>
                <View style={formsBackgroundStyle.container}>
                    {
                        mealData.length > 0 ?
                            mealData.map((meal) => (
                                <View key={meal.mealId} style={dayStyle.modulesContentData}>
                                    <View style={dayStyle.turnContainer}>
                                        <Pressable
                                            onPress={() => alert("Cliquei para Editar! " + fullDate.day + " de "+ verifyMonth(fullDate.month) +" "+ meal.dayTurn)}
                                        >
                                            <Ionicons name="create-outline" style={dayStyle.editIcon}/>
                                        </Pressable>
                                        <Text>Turno da Refeição: {meal.dayTurn}</Text>
                                        <Text>Refeições:</Text>
                                        <View style={dayStyle.foodContainer}>
                                            {
                                            meal.foods.map((food) => (
                                                <Text key={food.id} style={dayStyle.foodText}>
                                                    {food.name}: {food.quantity}{food.unity}
                                                </Text>
                                            ))
                                            }
                                        </View>
                                        <Pressable
                                            onPress={() => alert("Cliquei para Remover! " + fullDate.day + " de "+ verifyMonth(fullDate.month) +" "+ meal.dayTurn)}
                                        >
                                            <Ionicons name="remove-circle-outline" style={dayStyle.removeIcon}/>
                                        </Pressable>
                                    </View>
                                </View>
                            ))
                        :
                        <Text>Não há registros de refeição para este dia!</Text>
                    }
                    <Pressable
                    onPress={() => setAddMealModal(!addMealModal)}
                    >
                        <Ionicons name="add-circle-outline" style={dayStyle.addIcon}/>
                    </Pressable>
                    
                </View>
            </View>
            <View style={dayStyle.moduleContent}>
                <Text style={dayStyle.titleLabel}>CORPORAL</Text>
                <Pressable style={formsBackgroundStyle.container}
                    onPress={() => console.log("cliquei")}
                >
                    {
                        exerciceData.length > 0 ?
                            exerciceData.map((exercice) => (
                                <View key={meal.mealId} style={dayStyle.modulesContentData}>
                                    <View style={dayStyle.turnContainer}>
                                    <Text>Turno da Refeição: {meal.dayTurn}</Text>
                                    <Text>Foods:</Text>
                                    {meal.foods.map((food) => (
                                        <Text key={food.id}>{food.name}, {food.quantity} {food.unity}</Text>
                                    ))}
                                    </View>
                                </View>
                            ))
                        :
                        <Text>Não há registros de exercícios para este dia!</Text>
                    }
                    <Ionicons name="add-circle-outline" style={dayStyle.addIcon}/>
                </Pressable>
            </View>
            <View style={dayStyle.moduleContent}>
                <Text style={dayStyle.titleLabel}>COMPORTAMENTAL</Text>
                <Pressable style={formsBackgroundStyle.container}
                    onPress={() => console.log("cliquei")}
                >
                    {
                        psychologicalData.length > 0 ?
                            psychologicalData.map((exercice) => (
                                <View key={meal.mealId} style={dayStyle.modulesContentData}>
                                    <View style={dayStyle.turnContainer}>
                                    <Text>Turno da Refeição: {meal.dayTurn}</Text>
                                    <Text>Foods:</Text>
                                    {meal.foods.map((food) => (
                                        <Text key={food.id}>{food.name}, {food.quantity} {food.unity}</Text>
                                    ))}
                                    </View>
                                </View>
                            ))
                        :
                        <Text>Não há registros de emoções para este dia!</Text>
                    }
                    <Ionicons name="add-circle-outline" style={dayStyle.addIcon}/>
                </Pressable>
                <AddMeal
                addMealModal = {addMealModal}
                setAddMealModal = {setAddMealModal}
                />
                
            </View>
        </ScrollView>
    )
}