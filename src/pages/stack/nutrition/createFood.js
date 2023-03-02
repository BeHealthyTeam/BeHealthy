import React, {useState} from "react";
import { View, Text, Pressable, TextInput, Button, SafeAreaView} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';

import api from "../../../services/api";
import formsCadAlimentoStyle from "../../../styles/forms/formCadAlimentoStyle";
import SelectUnityCadAlimentoModal from "../../../modals/selectUnityCadAlimentoModal";
import Caloria from "../../../components/objects/cadastroAlimento/calorias";
import Fibras from "../../../components/objects/cadastroAlimento/fibras";
import AcidosGraxos from "../../../components/objects/cadastroAlimento/acidosGraxos";
import Macronutrientes from "../../../components/objects/cadastroAlimento/macronutrientes";
import Minerais from "../../../components/objects/cadastroAlimento/minerais";
import Vitaminas from "../../../components/objects/cadastroAlimento/vitaminas";


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
    }
    return(
        <SafeAreaView style={formsCadAlimentoStyle.container}>
            <View style = {formsCadAlimentoStyle.content}>
                <ScrollView showsVerticalScrollIndicator={false} style = {formsCadAlimentoStyle.scrollStyle}>
                    <View style = {formsCadAlimentoStyle.descritpionItems}>
                        <View style={formsCadAlimentoStyle.itemRow}>
                            <View style={formsCadAlimentoStyle.itemColumnName}>
                                <Text style = { formsCadAlimentoStyle.labelName}>Nome do Alimento:</Text>
                                <Controller
                                    control={control}
                                    name="nome"
                                    render={({ field: { onChange, onBlur, value} })=>(
                                        <TextInput
                                            style = {formsCadAlimentoStyle.inputRow}
                                            onChangeText = {onChange}
                                            onBlur = {onBlur}
                                            value = {value}
                                        />
                                    )}
                                />
                            </View>
                            <View style={formsCadAlimentoStyle.itemColumnUnity}>
                                <Text style = {formsCadAlimentoStyle.labelName}>Unidade:</Text>
                                <Pressable
                                    style={formsCadAlimentoStyle.inputPressableField}
                                    onPress={() => setUnidadeModal(!unidadeModal)}
                                >
                                    <Controller
                                    control={control}
                                    name="unidade"
                                    render={({ field: { onChange, onBlur, value} })=>(
                                        <TextInput
                                            style = {formsCadAlimentoStyle.unidadeLabel}
                                            editable={false}
                                            value = {unidadeValue}
                                            
                                        />
                                    )}
                                />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={formsCadAlimentoStyle.nutrientsSections}>
                    
                    {/* CALORIAS */}                    
                        <Pressable
                        onPress={
                            () => setShowCaloria(!showCaloria)
                        }
                        >
                            <View style = {formsCadAlimentoStyle.rowDirection}>
                                <Text style={formsCadAlimentoStyle.sectionTitle}>CALORIAS</Text>
                                <Ionicons name={showCaloria ? "chevron-down-outline" : "chevron-forward-outline"} size={20}/>
                            </View>
                        </Pressable>
                        {
                            showCaloria ? 
                            <View style={formsCadAlimentoStyle.itemRow}>
                                <Caloria control = {control} />
                            </View> : <></>
                        }
                    {/* FIBRAS */}
                        <Pressable
                        onPress={
                            () => setShowFibras(!showFibras)
                        }
                        >
                            <View style = {formsCadAlimentoStyle.rowDirection}>
                                <Text style={formsCadAlimentoStyle.sectionTitle}>FIBRAS</Text>
                                <Ionicons name={showFibras ? "chevron-down-outline" : "chevron-forward-outline"}size={20}/>
                            </View>
                        </Pressable>
                        {
                            showFibras ? 
                            <View style={formsCadAlimentoStyle.itemRow}>
                                <Fibras control = {control} />
                            </View> : <></>
                        }
                    {/* ACIDOS GRAXOS */}
                        <Pressable
                        onPress={
                            () => setShowAcidosGraxos(!showAcidosGraxos)
                        }
                        >
                            <View style = {formsCadAlimentoStyle.rowDirection}>
                                <Text style={formsCadAlimentoStyle.sectionTitle}>ÁCIDOS GRAXOS</Text>
                                <Ionicons name={showAcidosGraxos ? "chevron-down-outline" : "chevron-forward-outline"}size={20}/>
                            </View>
                        </Pressable>
                        {
                            showAcidosGraxos ? 
                            <View style={formsCadAlimentoStyle.itemRow}>
                                <AcidosGraxos control = {control} />
                            </View> : <></>
                        }
                    {/* MACRONUTRIENTES */}
                        <Pressable
                        onPress={
                            () => setShowMacroNutrientes(!showMacroNutrientes)
                        }
                        >
                            <View style = {formsCadAlimentoStyle.rowDirection}>
                                <Text style={formsCadAlimentoStyle.sectionTitle}>MACRONUTRIENTES</Text>
                                <Ionicons name={showMacroNutrientes ? "chevron-down-outline" : "chevron-forward-outline"}size={20}/>
                            </View>
                        </Pressable>
                        {
                            showMacroNutrientes ? 
                            <View style={formsCadAlimentoStyle.itemRow}>
                                <Macronutrientes control = {control} />
                            </View> : <></>
                        }
                    {/* MINERAIS */}
                        <Pressable
                        onPress={
                            () => setShowMinerais(!showMinerais)
                        }
                        >
                            <View style = {formsCadAlimentoStyle.rowDirection}>
                                <Text style={formsCadAlimentoStyle.sectionTitle}>MINERAIS</Text>
                                <Ionicons name={showMinerais ? "chevron-down-outline" : "chevron-forward-outline"}size={20}/>
                            </View>
                        </Pressable>
                        {
                            showMinerais ? 
                            <View style={formsCadAlimentoStyle.itemRow}>
                                <Minerais control = {control} />
                            </View> : <></>
                        }
                    {/* VITAMINAS */}
                    <Pressable
                        onPress={
                            () => setShowVitaminas(!showVitaminas)
                        }
                        >
                            <View style = {formsCadAlimentoStyle.rowDirection}>
                                <Text style={formsCadAlimentoStyle.sectionTitle}>VITAMINAS</Text>
                                <Ionicons name={showVitaminas ? "chevron-down-outline" : "chevron-forward-outline"}size={20}/>
                            </View>
                        </Pressable>
                        {
                            showVitaminas ? 
                            <View style={formsCadAlimentoStyle.itemRow}>
                                <Vitaminas control = {control} />
                            </View> : <></>
                        }
                    </View>
                    </ScrollView>
                </View>
                <Pressable
                    style={formsCadAlimentoStyle.pressableText}
                    onPress={handleSubmit(handleValues)}
                >
                    <Text style = {formsCadAlimentoStyle.submitText}>Cadastrar</Text>
                </Pressable>
                <SelectUnityCadAlimentoModal 
                    unidadeModal ={unidadeModal} 
                    setUnidadeModal={setUnidadeModal}
                    unidadeValue = {unidadeValue}
                    setUnidadeValue = {setUnidadeValue}
                />
        </SafeAreaView>
        
    )
}