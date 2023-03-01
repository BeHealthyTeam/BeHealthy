import React from "react";
import { View, Text, Alert, TextInput, Button, SafeAreaView} from "react-native";
import { useForm, Controller } from "react-hook-form";

import api from "../../services/api";
import formsStyle from "../../styles/forms/formsStyle.js";

export default function CadastrarCliente({navigation}){

    const {control, handleSubmit, formState: {errors}} = useForm({})
    async function handleValues(data){
        console.log("teste")
        api.post("/clientes/cadastrar",
        {
            nome: data.name,
            email: data.email,
            idade: data.age,
            peso: data.weight,
            altura: data.height,
        }).then(function(response){console.log(response)}).catch(function (error) {
            console.error(error.message);
          });
    }
    return(
        <SafeAreaView style={formsStyle.container}>
            <View style = {formsStyle.content}>

                <Text style = { formsStyle.label}> Nome:</Text>
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, onBlur, value} })=>(
                        <TextInput
                            style = {formsStyle.inputRow}
                            onChangeText = {onChange}
                            onBlur = {onBlur}
                            value = {value}
                            placeholder = "Nome do Cliente"
                        />
                    )}
                />
            
                    <Text style = { formsStyle.label}> E-mail:</Text>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value} })=>(
                            <TextInput
                                style = {formsStyle.inputRow}
                                onChangeText = {onChange}
                                onBlur = {onBlur}
                                value = {value}
                                placeholder = "a@a.com"
                            />
                        )}
                    />

                <View style = {formsStyle.rowContent}>
                    <View style = {formsStyle.columnContent}> 
                    <Text style = {formsStyle.label}>Idade:</Text>
                      
                        <Controller
                            control={control}
                            name="age"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    style = {formsStyle.input}
                                    onChangeText = {onChange}
                                    onBlur = {onBlur}
                                    value = {value}
                                    placeholder = "99.99"
                                    keyboardType="phone-pad"
                                />
                            )}
                        />
                    </View>

                    <View style = {formsStyle.columnContent}>
                        <Text style = { formsStyle.label}>Peso:</Text>
                        <Controller
                            control={control}
                            name="weight"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    style = {formsStyle.input}
                                    onChangeText = {onChange}
                                    onBlur = {onBlur}
                                    value = {value}
                                    placeholder = "99.99"
                                    keyboardType="phone-pad"
                                />
                            )}
                        />
                    </View>

                    <View style = {formsStyle.columnContent}>
                        <Text style = {formsStyle.label}>Altura(cm):</Text>
                        <Controller
                            control={control}
                            name="height"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    style = {formsStyle.input}
                                    onChangeText = {onChange}
                                    onBlur = {onBlur}
                                    value = {value}
                                    placeholder = "99.99"
                                    keyboardType="phone-pad"
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
            <View style = {formsStyle.buttonLayout}>
                <Button
                    style = {formsStyle.button}
                    title="submit"
                    onPress={handleSubmit(handleValues)}
                />
            </View>
        </SafeAreaView>

    )
}