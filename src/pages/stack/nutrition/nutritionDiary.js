import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView, TouchableOpacity, View, Text, Pressable, TextInput} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons'

//import diarioNutricionalStyle from '../../styles/stack/diarioNutricionalStyle';
import formCreateStyle from "../../../styles/forms/formCreateStyle";
import formsBackgroundStyle from "../../../styles/forms/formsBackgroundStyle";

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
    <SafeAreaView style={formsBackgroundStyle.background}>
      <View style={formsBackgroundStyle.container}>
          <ScrollView>
              <Pressable
                  style={formCreateStyle.pressableAddFoodsToRecipe}
                  onPress={() => setSelectRefeicoes(!selectRefeicoes)}
                  title="submit"
              >
                  <Text style={formCreateStyle.inputRow}>Tipo de refeição</Text>
              </Pressable>
              <Pressable
                  style={formCreateStyle.pressableAddFoodsToRecipe}
                  onPress={() => setSelectRefeicoes(!selectRefeicoes)}
                  title="submit"
              >
                  <Text style={formCreateStyle.selectItemsLabel}>Selecione as refeições</Text>
              </Pressable>
            <View style={formCreateStyle.titleQuantidade}>
              <Text style={formCreateStyle.labelQuantidade}>Quantidade </Text>
              <Pressable
                onPress={ () => setAboutQuantidade(!aboutQuantidade) }
              >
                <Ionicons name={"help-circle-outline"} style={formCreateStyle.iconQuantidade} size={22}/>
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
          style={formsBackgroundStyle.pressableText}
          title="submit"
      >
          <Text style={formsBackgroundStyle.submitText}>Cadastrar</Text>
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
