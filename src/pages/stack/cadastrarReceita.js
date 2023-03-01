import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";

import api from "../../services/api";
import Alimento from "../../components/objects/alimento";
import MultiSelectFoods from "../../modals/multiselectFoods";

import formsStyle from "../../styles/forms/formsStyle";

export default function CadastrarReceita({ navigation }) {

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
        <SafeAreaView style={formsStyle.container}>
            <View style={formsStyle.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={formsStyle.label}>Nome:</Text>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={formsStyle.inputRow}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Nome da receita"
                            />
                        )}
                    />
                    <Text style={formsStyle.label}>Adicionar Alimentos:</Text>
                    <Pressable
                        style={formsStyle.pressableAddFoodsToRecipe}
                        onPress={() => setMultiSelectModal(!multiSelectModal)}
                        title="submit"
                    >
                        <Text style={formsStyle.inputPressableField}></Text>
                    </Pressable>
                    <Text style={formsStyle.label}>Selecionados:</Text>
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
                    
                </ScrollView>

                <MultiSelectFoods
                    multiSelectModal={multiSelectModal}
                    setMultiSelectModal={setMultiSelectModal}
                    ingredientes={ingredientes}
                    setIngredientes={setIngredientes}
                />
            </View>
            <Pressable
                style={formsStyle.pressableText}
                onPress={
                    handleSubmit(handleValues)
                }
                title="submit"
            >
                <Text style={formsStyle.submitText}>Cadastrar</Text>
            </Pressable>


        </SafeAreaView>


    )
}