import React, {useState} from "react";
import { View, Text, Pressable, TextInput} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";

import api from "../../../services/api";
import formCreateStyle from "../../../styles/forms/formCreateStyle";
import formsBackgroundStyle from "../../../styles/forms/formsBackgroundStyle";
import SelectUnityCadAlimentoModal from "../../../modals/selectUnityCadAlimentoModal";
import CreateFoodSection from "../../../components/utils/createFoodSections";


export default function CreateFood({navigation}){

    const {control, handleSubmit, formState: {errors}} = useForm({});
    const [unidadeModal, setUnidadeModal] = useState(false);
    const [unidadeValue, setUnidadeValue] = useState("");
    const [showCaloria, setShowCaloria] = useState(false);
    const [showFibras, setShowFibras] = useState(false);
    const [showAcidosGraxos, setShowAcidosGraxos] = useState(false);
    const [showMacroNutrientes, setShowMacroNutrientes] = useState(false);
    const [showMinerais, setShowMinerais] = useState(false);
    const [showVitaminas, setShowVitaminas] = useState(false);
    

    async function handleValues(data){
        api.post("/nutricao/alimento/cadastrar",
        {
            nome: data.nome,
            unidade: unidadeValue,
            energia: data.energia,
            fibra: data.fibra,
            proteina: data.proteina,
            lipideos: data.lipideos,
            colesterol: data.colesterol,
            carbo: data.carbo,
            calcio: data.calcio,
            magnesio: data.magnesio,
            manganes: data.manganes,
            fosforo: data.fosforo,
            ferro: data.ferro,
            sodio: data.sodio,
            potassio: data.potassio,
            zinco: data.zinco,
            saturados: data.saturados,
            mono: data.monoinsturados,
            poli: data.polinsaturados,
            b12: data.b12,
            b2: data.b2,
            b6: data.b6,
            b3: data.b3,
            vitaminaC: data.vitaminaC

        }).then(function(response){console.log(response)}).catch(function (error) {
            console.error(error.message);
          });
          navigation.navigate('Feed')
    }
    return(
        <View style={formsBackgroundStyle.background}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style = {formsBackgroundStyle.container}>
                    <View style = {formCreateStyle.formContainer}>
                        <View style={formCreateStyle.itemRow}>
                            <View style={formCreateStyle.itemColumnName}>
                                <Controller
                                    control={control}
                                    name="nome"
                                    render={({ field: { onChange, onBlur, value} })=>(
                                        <TextInput
                                            style = {formCreateStyle.inputRow}
                                            onChangeText = {onChange}
                                            onBlur = {onBlur}
                                            value = {value}
                                            placeholder = "Nome do Alimento"
                                        />
                                    )}
                                />
                            </View>
                            <Pressable
                                style={formCreateStyle.inputPressableField}
                                onPress={() => setUnidadeModal(!unidadeModal)}
                            >
                                <Controller
                                control={control}
                                name="unidade"
                                render={({ field: { onChange, onBlur, value} })=>(
                                    <TextInput
                                        style = {formCreateStyle.unidadeLabel}
                                        editable={false}
                                        value = {unidadeValue}
                                        placeholder = "Unidade"
                                    />
                                )}
                            />
                            </Pressable>
                        </View>
                    </View>
                    <View style={formCreateStyle.nutrientsSections}>
                                      
                        <CreateFoodSection
                            setOpenSection = {setShowCaloria}
                            openSection = {showCaloria}
                            sectionTitle = "CALORIAS"
                            control = {control}
                        />
                        <CreateFoodSection
                            setOpenSection = {setShowFibras}
                            openSection = {showFibras}
                            sectionTitle = "FIBRAS"
                            control = {control}
                        />
                        <CreateFoodSection
                            setOpenSection = {setShowAcidosGraxos}
                            openSection = {showAcidosGraxos}
                            sectionTitle = "ÁCIDOS GRAXOS"
                            control = {control}
                        />
                        <CreateFoodSection
                            setOpenSection = {setShowMacroNutrientes}
                            openSection = {showMacroNutrientes}
                            sectionTitle = "MACRONUTRIENTES"
                            control = {control}
                        />
                        <CreateFoodSection
                            setOpenSection = {setShowMinerais}
                            openSection = {showMinerais}
                            sectionTitle = "MINERAIS"
                            control = {control}
                        />
                        <CreateFoodSection
                            setOpenSection = {setShowVitaminas}
                            openSection = {showVitaminas}
                            sectionTitle = "VITAMINAS"
                            control = {control}
                        />
                    </View>
                </View>
                
                <Pressable
                    style={formsBackgroundStyle.pressableText}
                    onPress={handleSubmit(handleValues)}
                >
                    <Text style = {formsBackgroundStyle.submitText}>Cadastrar</Text>
                </Pressable>
                
                <SelectUnityCadAlimentoModal 
                    unidadeModal ={unidadeModal} 
                    setUnidadeModal={setUnidadeModal}
                    unidadeValue = {unidadeValue}
                    setUnidadeValue = {setUnidadeValue}
                />
            </ScrollView>
        </View>
        
    )
}