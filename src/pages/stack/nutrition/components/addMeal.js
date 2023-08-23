import { useState } from "react";
import { View, Text, Pressable, TextInput, SafeAreaView, Modal} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';

import api from "../../../../services/api"
import Food from "../../nutrition/components/food";

import popupStyle from "../../../../styles/modals/popupStyle";
import formCreateStyle from "../../../../styles/forms/formCreateStyle"
import AboutQuantidadeModal from "../modals/aboutQuantidadeModal";
import MultiselectMeals from "../modals/multiselectMeals";

export default function AddMeal(props) {

    const {control, handleSubmit, formState: { errors } } = useForm({}); // handle inputs to send
    const [aboutQuantidadeModal, setAboutQuantidadeModal] = useState(false);
    const [multiSelectModal, setMultiSelectModal] = useState(false);
    const [ingredientes, setIngredientes] = useState([]); // list ingredientes,  list quantidades

    const [morningSelected, setMorningSelected] = useState(false);
    const [middaySelected, setMiddaySelected] = useState(false);
    const [nightSelected, setNightSelected] = useState(false);
 
    async function handleValues(data){
        alert("Funcionalidade ainda em desenvolvimento!")
        // api.post("/nutricao/refeicao/cadastrar",
        // {
        //     nome: data.name,
        //     ingredientes: ingredientes,

        // }).then(function(response){console.log(response)}).catch(function (error) {
        //     console.error(error.message);
        //   });
    }

    return (
        <Modal style={popupStyle.modalBackGround}
        animationType="slide"
        transparent={true}
        visible={props.addMealModal}
        onRequestClose={() => props.setAddMealModal(!props.addMealModal)}>
            <Pressable style={popupStyle.modalBackGround}
                onPress={() => props.setAddMealModal(!props.addMealModal)}
            >
            </Pressable>
            <View style={popupStyle.multiSelectPopUpContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={formCreateStyle.turnIconsContainer}>
                        <Pressable
                            style={formCreateStyle.timeIcon}
                            onPress={() => {
                                setMorningSelected(!morningSelected)
                                setMiddaySelected(false)
                                setNightSelected(false)
                            }}
                            title="submit"
                        >
                            {
                                morningSelected ? 
                                <Ionicons name="partly-sunny-outline" style={formCreateStyle.turnIconLabelSelected}/>
                                    :
                                <Ionicons name="partly-sunny-outline" style={formCreateStyle.turnIconLabel}/>
                            }
                            
                        </Pressable>
                        <Pressable
                            style={formCreateStyle.timeIcon}
                            onPress={() => {
                                setMorningSelected(false)
                                setMiddaySelected(!middaySelected)
                                setNightSelected(false)
                            }}
                            title="submit"
                        >
                            {
                                middaySelected ? 
                                <Ionicons name="sunny-outline" style={formCreateStyle.turnIconLabelSelected}/>
                                    :
                                <Ionicons name="sunny-outline" style={formCreateStyle.turnIconLabel}/>
                            }
                        </Pressable>
                        <Pressable
                            style={formCreateStyle.timeIcon}
                            onPress={() => {
                                setMorningSelected(false)
                                setMiddaySelected(false)
                                setNightSelected(!nightSelected)
                            }}
                            title="submit"
                        >
                            {
                                nightSelected ? 
                                <Ionicons name="moon-outline" style={formCreateStyle.turnIconLabelSelected}/>
                                    :
                                <Ionicons name="moon-outline" style={formCreateStyle.turnIconLabel}/>
                            }
                        </Pressable>
                    </View>
                    <Pressable
                        style={formCreateStyle.pressableAddFoodsToRecipe}
                        onPress={() => setMultiSelectModal(!multiSelectModal)}
                        title="submit"
                    >
                        <Text style={formCreateStyle.selectItemsLabel}>Selecione a refeição</Text>
                    </Pressable>
                    <Text style={formCreateStyle.label}>Selecionados:</Text>
                    <View style={formCreateStyle.selectedContainer}>
                        {
                        ingredientes.length > 0 ?
                            <View style={formCreateStyle.qtdHelpContainer}>
                                <Text style={formCreateStyle.qtdLabel}>QTD.</Text>
                                <Pressable
                                onPress = {() => setAboutQuantidadeModal(!aboutQuantidadeModal)}
                                style = {formCreateStyle.iconPressable}
                                >
                                    <Ionicons name="help-outline" size={18} style={formCreateStyle.iconLabel}/>
                                </Pressable>
                            </View>
                            : <></>
                        }
                        {
                        ingredientes.length > 0 ? 
                            ingredientes.map(
                                food => {
                                    return <Food key={food.food.id} food={food.food} 
                                    ingredientes={ingredientes} setIngredientes={setIngredientes}
                                    />
                                }
                            )
                        :<Text>Nenhum alimento selecionado</Text>
                        }
                    </View>
                </ScrollView>

                <MultiselectMeals
                    multiSelectModal={multiSelectModal}
                    setMultiSelectModal={setMultiSelectModal}
                    selected={ingredientes}
                    setSelected={setIngredientes}
                />
                <AboutQuantidadeModal
                    aboutQuantidadeModal = {aboutQuantidadeModal}
                    setAboutQuantidadeModal = {setAboutQuantidadeModal}
                />
                <Pressable
                style={formCreateStyle.submitButton}
                onPress={
                    handleSubmit(handleValues)
                }
                title="submit"
                >
                    <Text style={formCreateStyle.submitButtonLabel}>Cadastrar</Text>
                </Pressable>
            </View>
        </Modal>
    )
}