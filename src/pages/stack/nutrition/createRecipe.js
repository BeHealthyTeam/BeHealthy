import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';

import api from "../../../services/api";
import Alimento from "../../../components/objects/alimento";

import formsBackgroundStyle from "../../../styles/forms/formsBackgroundStyle";
import formCreateStyle from "../../../styles/forms/formCreateStyle";
import MultiSelect from "../../../modals/multiselect";

export default function CreateRecipe({ navigation }) {

    const { control, handleSubmit, formState: { errors } } = useForm({}); // handle inputs to send
    const [multiSelectModal, setMultiSelectModal] = useState(false);
    const [ingredientes, setIngredientes] = useState([]); // list ingredientes,  list quantidades

    async function handleValues(data){
        api.post("/nutricao/receita/cadastrar",
        {
            nome: data.name,
            ingredientes: ingredientes,

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
                        ingredientes.length > 0 ?
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
                        ingredientes.length > 0 ? 
                            ingredientes.map(
                                food => {
                                    return <Alimento key={food.alimento.id} food={food.alimento} 
                                    ingredientes={ingredientes} setIngredientes={setIngredientes}
                                    />
                                }
                            )
                        :<Text>Nenhum alimento selecionado</Text>
                        }
                    </View>
                </ScrollView>

                <MultiSelect
                    multiSelectModal={multiSelectModal}
                    setMultiSelectModal={setMultiSelectModal}
                    selected={ingredientes}
                    setSelected={setIngredientes}
                    searchBy = {"/nutricao/alimentos"}
                    objectSelectedKey = {ingredientes.alimento}
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