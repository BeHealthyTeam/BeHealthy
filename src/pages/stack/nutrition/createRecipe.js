import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';

import api from "../../../services/api";
import { Auth } from 'aws-amplify';

import formsBackgroundStyle from "../../../styles/forms/formsBackgroundStyle";
import formCreateStyle from "../../../styles/forms/formCreateStyle";
import MultiSelectFoods from "../nutrition/modals/multiselectFoods"
import Food from "./components/food";

export default function CreateRecipe({ navigation }) {

    const { control, handleSubmit, formState: { errors } } = useForm({}); // handle inputs to send
    const [multiSelectModal, setMultiSelectModal] = useState(false);
    const [ingredients, setIngredients] = useState([]); // list ingredientes,  list quantidades

    async function handleValues(data){
        const session = await Auth.currentSession();
        const idToken = session.getIdToken().getJwtToken();
        api.post("/nutrition/recipe",
        {
            name: data.name,
            ingredients: ingredients,
        },{
            headers: { "Authorization": Auth.user.signInUserSession.idToken.jwtToken },
        }).then(function(response){console.log(response)}).catch(function (error) {
            console.error(error.message);
          });
    }

    return (
        <SafeAreaView style={formsBackgroundStyle.background}>
            <View style={formsBackgroundStyle.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={formCreateStyle.inputRow}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Nome da receita"
                            />
                        )}
                    />
                    <Pressable
                        style={formCreateStyle.pressableAddFoodsToRecipe}
                        onPress={() => setMultiSelectModal(!multiSelectModal)}
                        title="submit"
                    >
                        <Text style={formCreateStyle.selectItemsLabel}>Selecione os ingredientes</Text>
                    </Pressable>
                    <Text style={formCreateStyle.label}>Selecionados:</Text>
                    <View style={formCreateStyle.selectedContainer}>
                        {
                        ingredients.length > 0 ?
                            <View style={formCreateStyle.qtdHelpContainer}>
                                <Text style={formCreateStyle.qtdLabel}>QTD.</Text>
                                <Pressable
                                onPress = {() => console.log("aaaaaaaaa")}
                                style = {formCreateStyle.iconPressable}
                                >
                                    <Ionicons name="create-outline" size={18} style={formCreateStyle.iconLabel}/>
                                </Pressable>
                            </View>
                            : <></>
                        }
                        {
                        ingredients.length > 0 ? 
                            ingredients.map(
                                ingredient => {
                                    console.log(ingredient)
                                    return <Food key={ingredient.food.id} food={ingredient.food} 
                                    ingredients={ingredients} setIngredients={setIngredients}
                                    />
                                }
                            )
                        :<Text>Nenhum alimento selecionado</Text>
                        }
                    </View>
                </ScrollView>

                <MultiSelectFoods
                    multiSelectModal={multiSelectModal}
                    setMultiSelectModal={setMultiSelectModal}
                    selected={ingredients}
                    setSelected={setIngredients}
                />
            </View>
            <Pressable
                style={formsBackgroundStyle.pressableText}
                onPress={
                    handleSubmit(handleValues)
                }
                title="submit"
            >
                <Text style={formsBackgroundStyle.submitText}>Cadastrar</Text>
            </Pressable>


        </SafeAreaView>


    )
}