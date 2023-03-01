import React, { useState, useEffect } from 'react';
import { Pressable } from 'react-native';
import { TouchableOpacity, FlatList, Text, Modal, View, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'

import api from '../services/api';
import multiSelectRefeicoes from '../styles/modals/multiSelectRefeicoes';

function Item({ id, title, selectedItems, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        multiSelectRefeicoes.item,
        { backgroundColor: selectedItems.includes(id) ? 'orange' : 'lightgreen' },
      ]}
    >
      <View style={multiSelectRefeicoes.titleRow}>
        <Text style={multiSelectRefeicoes.title}>{title}</Text>
        {selectedItems.includes(id) ? <Ionicons  name="checkmark-circle-outline" style size={25}/> : <></>}
        </View>
    </TouchableOpacity>
  );
}

export default function SelectRefeicoes(props) {

  const [idsSelected, setIdsSelected] = useState([]);
  const [DATA, setDATA] = useState();

  useEffect(() => {
        
    async function getAlimentos(){
        try{
          const responseAlimentos = await api.get("/nutricao/alimentos")
          const responseReceitas = await api.get("/nutricao/receitas")
          let response = [...responseAlimentos.data, ...responseReceitas.data]
          setDATA(response)
          console.log(DATA)
          
          
        }catch(e){
            console.log(e.message)
        }
    }
    getAlimentos()
    }, []);

    async function searchFood(word){
      try {
        const response = await api.get("/nutricao/alimentos/"+word)
        setDATA(response.data);
       
      } catch (error) {
        console.log(error.message)
      }
    }

  function handleOnSelectFood(food) {
    
    setIdsSelected((actual) => {
      if(idsSelected.includes(food.id)) { // desselecionar
        props.setAddedRefeicoes(props.addedRefeicoes.filter(({alimento}) => alimento.id !== food.id))
        return idsSelected.filter(id => id !== food.id)

      }else { // selecionar
        let ingrediente = new Object();
        ingrediente.alimento = DATA.find(x => x.id === food.id);
        ingrediente.quantidade = 0;
        props.addedRefeicoes.push(ingrediente)
        return [...idsSelected, food.id]
      }
      
    })
  }

  return (
  
  <Modal
    animationType="fade"
    transparent = {true}
    visible = {props.selectRefeicoes}
    style = {multiSelectRefeicoes.modalBackGround}
    onRequestClose={() => {
        props.setSelectRefeicoes(!props.selectRefeicoes);
    }}
    >
      <Pressable 
      style = {multiSelectRefeicoes.modalBackGround}
      onPress = {
        () => props.setSelectRefeicoes(!props.selectRefeicoes)}
      >
        <View style = {multiSelectRefeicoes.modalListFoods}>
          <TextInput 
          style = {multiSelectRefeicoes.inputRow} 
          onChangeText={
            newFoodFilter => searchFood(newFoodFilter)
          }>
          </TextInput>
          <View style = {multiSelectRefeicoes.flatListContent}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  title={item.nome}
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
                style={multiSelectRefeicoes.pressableText}
                onPress={() => {
                    props.setSelectRefeicoes(!props.selectRefeicoes);
                  }
                }
                title="submit"
            >
                <Text style = {multiSelectRefeicoes.submitText}>Atualizar</Text>
            </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}