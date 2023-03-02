import React from "react";
import { View, SafeAreaView, Text, StatusBar, Alert, TextInput, Button} from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function Calculate({navigation}){

    const {control, handleSubmit, formState: {errors}} = useForm({})
    function handleValues(data){
        const alturaCm = (data.altura).replace(/,/, "")
        const IMC = (parseFloat((data.peso).replace(",", "."))/parseFloat((data.altura).replace(",", ".")))/parseFloat((data.altura).replace(",", "."))
        console.log(IMC)
        alert("Peso: " + data.peso + "\n Altura(cm): " + alturaCm + "\n Altura(m): " + data.altura + "\n Idade: " + data.idade 
        + "\n IMC: " + IMC)
    }

    return(
        <SafeAreaView style={styles.container}>

            <View style = {styles.container}>
                <Text>Calcular IMC</Text>

                <View style= {styles.content}>
                    <Text>Peso:</Text>
                    <Controller
                        control={control}
                        name="peso"
                        render={({ field: { onChange, onBlur, value} })=>(
                            <TextInput
                                style = {styles.input}
                                onChangeText = {onChange}
                                onBlur = {onBlur}
                                value = {value}
                                placeholder = "99.99"
                            />
                        )}
                    />
                    <Text>Altura(m):</Text>
                    <Controller
                        control={control}
                        name="altura"
                        render={({ field: { onChange, onBlur, value} })=>(
                            <TextInput
                                style = {styles.input}
                                onChangeText = {onChange}
                                onBlur = {onBlur}
                                value = {value}
                                placeholder = "99.99"
                            />
                        )}
                    />
                    <Text>Idade:</Text>
                    <Controller
                        control={control}
                        name="idade"
                        render={({ field: { onChange, onBlur, value} })=>(
                            <TextInput
                                style = {styles.input}
                                onChangeText = {onChange}
                                onBlur = {onBlur}
                                value = {value}
                                placeholder = "99.99"
                            />
                        )}
                    />
                    
                </View>

                <Button
                    style = {styles.button}
                    title="submit"
                    onPress={handleSubmit(handleValues)}
                />
            </View>
        </SafeAreaView>
    )
}


