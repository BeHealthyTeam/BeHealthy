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

export default function MultiSelectFoods(props) {

  
  const [idsSelected, setIdsSelected] = useState([]);
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {     
    async function getAllFoods(){
        const session = await Auth.currentSession();
        const idToken = session.getIdToken().getJwtToken();
        try{
          const response = await api.get("/nutrition/food/",
          {
            headers: { "Authorization": Auth.user.signInUserSession.idToken.jwtToken },
          })
          setFoodData(response.data)
        }catch(e){
            console.log(e.message)
        }
    }
    getAllFoods()
    }, []);

    async function searchByCharactersOrWord(word){
      try {
        const session = await Auth.currentSession();
        const idToken = session.getIdToken().getJwtToken();
        const response = await api.get("/nutrition/food/" + word, {
          headers: { "Authorization": Auth.user.signInUserSession.idToken.jwtToken },
        })
        setFoodData(response.data);
       
      } catch (error) {
        console.log(error.message)
      }
    }

  function handleOnSelectFood(food) {
    setIdsSelected((actual) => {
      if(idsSelected.includes(food.id)) { // desselecionar
        props.setSelected(props.selected.filter(({alimento}) => alimento.id !== food.id))
        return idsSelected.filter(id => id !== food.id)

      }else { // selecionar
        let ingredient = new Object();
        ingredient.food = foodData.find(x => x.id === food.id);
        ingredient.quantity = 0;

        props.selected.push(ingredient)
        return [...idsSelected, food.id]
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
              data={foodData}
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