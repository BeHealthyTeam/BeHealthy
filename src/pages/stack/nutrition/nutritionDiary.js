import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView, TouchableOpacity, View, Text, Pressable, TextInput} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons'

//import diarioNutricionalStyle from '../../styles/stack/diarioNutricionalStyle';
import formsStyle from "../../../styles/forms/formsStyle";
import api from "../../../services/api";
import SelectRefeicoes from "../../../modals/selectRefeicoes";
import Refeicao from "../../../components/objects/refeicao";
import AboutQuantidadeModal from "../../../modals/aboutQuantidadeModal";

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        diarioNutricionalStyle.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={diarioNutricionalStyle.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function NutritionDiary({navigation}) {
  const { control, handleSubmit, formState: { errors } } = useForm({}); // handle inputs to send
  const [aboutQuantidade, setAboutQuantidade] = useState(false);
  const [selectRefeicoes, setSelectRefeicoes] = useState(false);
  const [addedRefeicoes, setAddedRefeicoes] = useState([]);

  return (
    <SafeAreaView style={formsStyle.container}>
      <View style={formsStyle.content}>
          <ScrollView>
              <Text style={formsStyle.label}>Adicionar refeição:</Text>
              <Pressable
                  style={formsStyle.pressableAddFoodsToRecipe}
                  onPress={() => setSelectRefeicoes(!selectRefeicoes)}
                  title="submit"
              >
                  <Text style={formsStyle.inputPressableField}></Text>
              </Pressable>
            <View style={formsStyle.titleQuantidade}>
              <Text style={formsStyle.labelQuantidade}>Quantidade </Text>
              <Pressable
                onPress={ () => setAboutQuantidade(!aboutQuantidade) }
              >
                <Ionicons name={"help-circle-outline"} style={formsStyle.iconQuantidade} size={22}/>
              </Pressable>
              
            </View>

          {
          addedRefeicoes.length > 0 ? 
            addedRefeicoes.map(
                  refeicao => {
                      return <Refeicao key={refeicao.id} refeicao={refeicao} 
                      addedRefeicoes={addedRefeicoes} setAddedRefeicoes={setAddedRefeicoes} 
                      />
                  }
              )
          
          :<Text>Nenhum alimento selecionado</Text>
          }
              
          </ScrollView>
      </View>
      <Pressable
          style={formsStyle.pressableText}
          title="submit"
      >
          <Text style={formsStyle.submitText}>Cadastrar</Text>
    </Pressable>

    <SelectRefeicoes
      selectRefeicoes = {selectRefeicoes}
      setSelectRefeicoes ={setSelectRefeicoes}
      addedRefeicoes = {addedRefeicoes}
      setAddedRefeicoes = {setAddedRefeicoes}
    />

    <AboutQuantidadeModal
      aboutQuantidade = {aboutQuantidade}
      setAboutQuantidade = {setAboutQuantidade}
    />

  </SafeAreaView>
  );
}
