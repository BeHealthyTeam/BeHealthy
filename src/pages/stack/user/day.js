import { View, Text, SafeAreaView, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

import formsBackgroundStyle from "../../../styles/forms/formsBackgroundStyle";
import dayStyle from "../../../styles/pages/stack/dayStyle";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import api from "../../../services/api";
import AddMeal from "../nutrition/components/addMeal";

export default function Day({ navigation, route}) {
    const { fullDate, getAllDiariesFromMonthAndYear } = route.params; // Access the passed parameter
    const [addMealModal, setAddMealModal] = useState(false)
    const [mealDiaryData, setMealDiaryData] = useState([])
    const exerciceData = []
    const psychologicalData = []

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
    async function getAllFromDateMeals(){
        const session = await Auth.currentSession();
        const idToken = session.getIdToken().getJwtToken();
        try{
            const response = await api.get("/nutrition/meal/"+ fullDate.dateString,
            {
                headers: { "Authorization": "Bearer " +Auth.user.signInUserSession.idToken.jwtToken },
            })
            setMealDiaryData(response.data)
        }catch(e){
            console.log(e.message)
        }
    }
    
    useEffect(()=>{
        getAllFromDateMeals()
    }, [mealDiaryData])

    return (
        <ScrollView style={formsBackgroundStyle.background}>
            <View style={dayStyle.dataStringContent}>
                <Text style={dayStyle.dateLabel}>
                    {fullDate.day} de {verifyMonth(fullDate.month)} de {fullDate.year}
                </Text>
            </View>
            <View style={dayStyle.moduleContent}>
                <Text style={dayStyle.titleLabel}>NUTRICIONAL</Text>
                <View style={formsBackgroundStyle.container}>
                    {
                        mealDiaryData.length > 0 ?
                            mealDiaryData.map((meal) => (
                                <View key={meal.id} style={dayStyle.modulesContentData}>
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
                                            meal.foodsMeal.map((consumedFood, index)=>(
                                                <Text key={index} style={dayStyle.foodText}>
                                                    {consumedFood.name}: {consumedFood.mealQuantity}
                                                </Text>
                                            ))}
                                            {
                                            meal.recipesMeal.map((consumedRecipe, index)=>(
                                                <Text key={index} style={dayStyle.foodText}>
                                                    {consumedRecipe.name}: {consumedRecipe.mealQuantity} de {consumedRecipe.ingredients[0].quantity}
                                                    {consumedRecipe.ingredients[0].unity}
                                                </Text>
                                            ))}
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
                        <Text>Não há registros de refeições para este dia!</Text>
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
                fullDate = {fullDate}
                navigation = {navigation}
                getAllFromDateMeals = {getAllFromDateMeals}
                getAllDiariesFromMonthAndYear = {getAllDiariesFromMonthAndYear}
                />
                
            </View>
        </ScrollView>
    )
}