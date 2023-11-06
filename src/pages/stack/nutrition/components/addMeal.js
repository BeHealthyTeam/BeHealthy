import { useEffect, useState } from "react";
import { View, Text, Pressable, TextInput, SafeAreaView, Modal} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Auth } from "aws-amplify";

import api from "../../../../services/api"
import Meal from "./meal";

import popupStyle from "../../../../styles/modals/popupStyle";
import formCreateStyle from "../../../../styles/forms/formCreateStyle"
import AboutQuantidadeModal from "../modals/aboutQuantidadeModal";
import MultiselectMeals from "../modals/multiselectMeals";


export default function AddMeal(props) {

    const {control, handleSubmit, formState: { errors } } = useForm({}); // handle inputs to send
    const [aboutQuantidadeModal, setAboutQuantidadeModal] = useState(false);
    const [multiSelectModal, setMultiSelectModal] = useState(false);
    const [meals, setMeals] = useState([]);
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [selectedRecipes, setSelectedRecipes] = useState([]);

    const [morningSelected, setMorningSelected] = useState(true);
    const [middaySelected, setMiddaySelected] = useState(false);
    const [nightSelected, setNightSelected] = useState(false);

    async function separateValues(){
        setSelectedFoods([])
        setSelectedRecipes([])
        try{
            meals.map(element => {
                if('ingredients' in element.meal){
                    let recipeAsMeal = new Object()
                    recipeAsMeal = element.meal
                    setSelectedRecipes(prevSelectedRecipes => [...prevSelectedRecipes, recipeAsMeal]);
                }
                else{
                    let foodAsMeal = new Object()
                    foodAsMeal = element.meal
                    setSelectedFoods(prevSelectedFoods => [...prevSelectedFoods, foodAsMeal]);
                }
            });
        }catch(e){
            console.log(e.message)
        }
    }
    useEffect(() => {
        setSelectedFoods([])
        setSelectedRecipes([])
        setMeals([])
    }, [])

    useEffect(() => {
        if(meals.length > 0)
            handleValues(selectedFoods, selectedRecipes)
    }, [selectedFoods, selectedRecipes])
 
    async function handleValues(foods, recipes){
        const session = await Auth.currentSession();
        const idToken = session.getIdToken().getJwtToken();

        if(morningSelected){
            api.post("/nutrition/meal", {
                userId: Auth.user.attributes.email,
                date: props.fullDate.dateString,
                dayTurn: "morning",
                foodsMeal: foods,
                recipesMeal: recipes,
            },{
                headers: { "Authorization": "Bearer " +Auth.user.signInUserSession.idToken.jwtToken },
            }).catch(function (error) {
                console.error(error.message);
            });
            alert("Sucess!")
            props.getAllDiariesFromMonthAndYear()
            props.getAllFromDateMeals()
            props.setAddMealModal(false)
        }
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
                        meals.length > 0 ?
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
                        meals.length > 0 ? 
                            meals.map(
                                element => {
                                    return <Meal key = {element.meal.id} meal = {element.meal} 
                                    meals={meals} setMeals={setMeals}
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
                    selected={meals}
                    setSelected={setMeals}
                />
                <AboutQuantidadeModal
                    aboutQuantidadeModal = {aboutQuantidadeModal}
                    setAboutQuantidadeModal = {setAboutQuantidadeModal}
                />
                <Pressable
                style={formCreateStyle.submitButton}
                onPress={
                    separateValues
                }
                title="submit"
                >
                    <Text style={formCreateStyle.submitButtonLabel}>Cadastrar</Text>
                </Pressable>
            </View>
        </Modal>
    )
}