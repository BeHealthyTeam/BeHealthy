import React from "react";
import { View, Text, Alert, TextInput, Button, SafeAreaView} from "react-native";
import { useForm, Controller } from "react-hook-form";

import api from "../../../services/api";
import formCreateStyle from "../../../styles/forms/formCreateStyle";

export default function CreateClients({navigation}){

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
        <SafeAreaView style={formCreateStyle.container}>
            <View style = {formCreateStyle.content}>

                <Text style = { formCreateStyle.label}> Nome:</Text>
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, onBlur, value} })=>(
                        <TextInput
                            style = {formCreateStyle.inputRow}
                            onChangeText = {onChange}
                            onBlur = {onBlur}
                            value = {value}
                            placeholder = "Nome do Cliente"
                        />
                    )}
                />
            
                    <Text style = { formCreateStyle.label}> E-mail:</Text>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value} })=>(
                            <TextInput
                                style = {formCreateStyle.inputRow}
                                onChangeText = {onChange}
                                onBlur = {onBlur}
                                value = {value}
                                placeholder = "a@a.com"
                            />
                        )}
                    />

                <View style = {formCreateStyle.rowContent}>
                    <View style = {formCreateStyle.columnContent}> 
                    <Text style = {formCreateStyle.label}>Idade:</Text>
                      
                        <Controller
                            control={control}
                            name="age"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    style = {formCreateStyle.input}
                                    onChangeText = {onChange}
                                    onBlur = {onBlur}
                                    value = {value}
                                    placeholder = "99.99"
                                    keyboardType="phone-pad"
                                />
                            )}
                        />
                    </View>

                    <View style = {formCreateStyle.columnContent}>
                        <Text style = { formCreateStyle.label}>Peso:</Text>
                        <Controller
                            control={control}
                            name="weight"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    style = {formCreateStyle.input}
                                    onChangeText = {onChange}
                                    onBlur = {onBlur}
                                    value = {value}
                                    placeholder = "99.99"
                                    keyboardType="phone-pad"
                                />
                            )}
                        />
                    </View>

                    <View style = {formCreateStyle.columnContent}>
                        <Text style = {formCreateStyle.label}>Altura(cm):</Text>
                        <Controller
                            control={control}
                            name="height"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    style = {formCreateStyle.input}
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
            <View style = {formCreateStyle.buttonLayout}>
                <Button
                    style = {formCreateStyle.button}
                    title="submit"
                    onPress={handleSubmit(handleValues)}
                />
            </View>
        </SafeAreaView>

    )
}