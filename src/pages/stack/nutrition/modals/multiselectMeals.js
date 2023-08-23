import React, { useState, useEffect } from 'react';
import { Pressable } from 'react-native';
import { TouchableOpacity, FlatList, Text, Modal, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'

import api from "../../../../services/api"
import { Auth } from 'aws-amplify';

import multiSelectFood from '../../../../styles/modals/multiSelectFoodStyle';

function Item({ id, title, selectedItems, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        multiSelectFood.item,
        { backgroundColor: selectedItems.includes(id) ? 'orange' : 'lightgreen' },
      ]}
    >
      <View style={multiSelectFood.titleRow}>
        <Text style={multiSelectFood.title}>{title}</Text>
        {selectedItems.includes(id) ? <Ionicons  name="checkmark-circle-outline" style size={25}/> : <></>}
      </View>
    </TouchableOpacity>
  );
}

export default function MultiselectMeals(props) {

  const [idsSelected, setIdsSelected] = useState([]);
  const [mealData, setMealData] = useState([]);
   
  useEffect(() => {    
    getAllMeals()
  }, []);

  async function getAllMeals(){
    const session = await Auth.currentSession();
    try{
      const foodResponse = await api.get("/nutrition/food",
      {
        headers: { "Authorization": Auth.user.signInUserSession.idToken.jwtToken },
      })

      const recipeResponse = await api.get("/nutrition/recipe",
      {
        headers: { "Authorization": Auth.user.signInUserSession.idToken.jwtToken },
      })
      setMealData([...foodResponse.data, ...recipeResponse.data])

    }catch(e){
        console.log(e.message)
      }
  }

    async function searchByCharactersOrWord(word){
      try {
        const session = await Auth.currentSession();

        const foodResponse = await api.get("/nutrition/food/" + word, {
          headers: { "Authorization": Auth.user.signInUserSession.idToken.jwtToken },
        })
        const recipeResponse = await api.get("/nutrition/recipe/" + word,
        {
          headers: { "Authorization": Auth.user.signInUserSession.idToken.jwtToken },
        })

        setMealData([...foodResponse.data, ...recipeResponse.data])
        
        } catch (error) {
          console.log(error.message)
        }
    }

  function handleOnSelectFood(item) {
    setIdsSelected((actual) => {
      if(idsSelected.includes(item.id)) { // desselecionar
        console.log(props.selected)
        props.setSelected(props.selected.filter(({food}) => food.id !== item.id))
        return idsSelected.filter(id => id !== item.id)

      }else { // selecionar
        let ingredient = new Object();
        ingredient.food =  mealData.find(x => x.id === item.id);
        ingredient.quantity = 0;

        props.selected.push(ingredient)
        return [...idsSelected, item.id]
      }
    })
  }

  return (
  
  <Modal
    animationType="fade"
    transparent = {true}
    visible = {props.multiSelectModal}
    style = {multiSelectFood.modalBackGround}
    onRequestClose={() => {
        props.setMultiSelectModal(!props.multiSelectModal);
    }}
    >
      <Pressable 
      style = {multiSelectFood.modalBackGround}
      onPress = {
        () => props.setMultiSelectModal(!props.multiSelectModal)}
      >
        <View style = {multiSelectFood.modalListFoods}>
          <TextInput 
          style = {multiSelectFood.inputRow} 
          onChangeText={
            newFoodFilter => searchByCharactersOrWord(newFoodFilter)
          }>
          </TextInput>
          <View style = {multiSelectFood.flatListContent}>
            <FlatList
              data={mealData}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  title={item.name}
                  selectedItems={idsSelected}
                  
                  onSelect={() => {
                    handleOnSelectFood(item)
                  }}
                />
              )}
              keyExtractor={item => item.id}
            />
            </View>
            <Pressable
                style={multiSelectFood.pressableText}
                onPress={() => {
                    props.setMultiSelectModal(!props.multiSelectModal);
                  }
                }
                title="submit"
            >
                <Text style = {multiSelectFood.submitText}>Atualizar</Text>
            </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}