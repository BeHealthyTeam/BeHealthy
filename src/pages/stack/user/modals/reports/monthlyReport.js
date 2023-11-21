import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Auth } from "aws-amplify";
import api from "../../../../../services/api";

import monthlyReportModalStyle from "../../../../../styles/modals/monthlyReportModal";

import { Modal } from "react-native";

export default function MonthlyReport(props) {

  const [currentTimeType, setCurrentTimeType] = useState("Mensal");
  const [currentYearMonth, setCurrentYearMonth] = useState()
  const [monthlyNutritionalData, setMonthlyNutritionalData] = useState({});
  const [nutritionalData, setNutritionalData] = useState({});

    
  useEffect(()=>{
    setCurrentYearMonth(props.currentMonthAndYear)
    if(props.monthlyReportModal){
      getMonthlyNutritionReport()
    }
  },[props.monthlyReportModal])

  useEffect(()=>{
    if(props.monthlyReportModal){
      getMonthlyNutritionReport()
      setCurrentTimeType('Mensal')
    }
    
  },[currentYearMonth])
      

  async function handleLeftArrow(){
    switch (currentTimeType) {
      case "Semana 1":
        setCurrentTimeType("Mensal");
        setNutritionalData(monthlyNutritionalData)
        break
      case "Semana 2":
        setCurrentTimeType("Semana 1");
        getAllWeekNutritionReport(0)
        break
      case "Semana 3":
        setCurrentTimeType("Semana 2");
        getAllWeekNutritionReport(1)
        break
      case "Semana 4":
        setCurrentTimeType("Semana 3");
        getAllWeekNutritionReport(2)
        break
      case "Semana 5":
        setCurrentTimeType("Semana 4");
        getAllWeekNutritionReport(3)
        break
    }
  }
  async function handleRightArrow(){
    switch (currentTimeType) {
      case "Mensal":
        setCurrentTimeType("Semana 1");
        getAllWeekNutritionReport(0)
        break
      case "Semana 1":
        setCurrentTimeType("Semana 2");
        getAllWeekNutritionReport(1)
        break
      case "Semana 2":
        setCurrentTimeType("Semana 3");
        getAllWeekNutritionReport(2)
        break
      case "Semana 3":
        setCurrentTimeType("Semana 4");
        getAllWeekNutritionReport(3)
        break;
      case "Semana 4":
        setCurrentTimeType("Semana 5");
        getAllWeekNutritionReport(4)
        break;
    }
  }
  async function getMonthlyNutritionReport(){
    const session = await Auth.currentSession();
    const idToken = session.getIdToken().getJwtToken();
    try{
      const response = await api.get("/nutrition/report/consumedNutrientsByMonth/"+currentYearMonth,
      {
        headers: { "Authorization": "Bearer " +Auth.user.signInUserSession.idToken.jwtToken },
      })
      const formatedData = {
        "Calorias": response.data.energy,
        "Fibras": response.data.fiber,
        "Proteína": response.data.protein,
        "Lipídeo": response.data.lipids,
        "Colesterol": response.data.cholesterol,
        "Carboidrato": response.data.carbo,
        "Cálcio": response.data.calcium,
        "Magnésio": response.data.magnesium,
        "Manganês": response.data.manganese,
        "Fósforo": response.data.phosphor,
        "Ferro": response.data.iron,
        "Sódio": response.data.sodium,
        "Potássio": response.data.potassium,
        "Zinco": response.data.zinc,
        "Saturadas": response.data.saturated,
        "Monosaturadas": response.data.monounsaturated,
        "Polinsaturadas": response.data.polyunsaturated,
        "B1": response.data.b1,
        "B2": response.data.b2,
        "B6": response.data.b6,
        "B3": response.data.b3,
        "Vitamina C": response.data.vitaminC,
      }
      setMonthlyNutritionalData(formatedData)
      setNutritionalData(formatedData)
    }catch(e){
      console.log(e.message)
    }
  }
  async function getAllWeekNutritionReport(weekNumber){
    const session = await Auth.currentSession();
    const idToken = session.getIdToken().getJwtToken();
      try{
        const response = await api.get("/nutrition/report/consumedNutrientsByWeek/"+currentYearMonth+ "/"+weekNumber,
        {
          headers: { "Authorization": "Bearer " +Auth.user.signInUserSession.idToken.jwtToken },
        })
        const formatedData = {
          "Calorias": response.data.energy,
          "Fibras": response.data.fiber,
          "Proteína": response.data.protein,
          "Lipídeo": response.data.lipids,
          "Colesterol": response.data.cholesterol,
          "Carboidrato": response.data.carbo,
          "Cálcio": response.data.calcium,
          "Magnésio": response.data.magnesium,
          "Manganês": response.data.manganese,
          "Fósforo": response.data.phosphor,
          "Ferro": response.data.iron,
          "Sódio": response.data.sodium,
          "Potássio": response.data.potassium,
          "Zinco": response.data.zinc,
          "Saturadas": response.data.saturated,
          "Monosaturadas": response.data.monounsaturated,
          "Polinsaturadas": response.data.polyunsaturated,
          "B1": response.data.b1,
          "B2": response.data.b2,
          "B6": response.data.b6,
          "B3": response.data.b3,
          "Vitamina C": response.data.vitaminC,
        }
        setNutritionalData(formatedData)
      }catch(e){
        console.log(e.message)
      }
  }
  async function setPrevMonth(){
    var currentMonth = parseInt(currentYearMonth.slice(-2));
    currentMonth = currentMonth-1;
    if(currentMonth < 10){
      if(currentMonth == 0){
        var currentYear = parseInt(currentYearMonth.slice(0,4))
        currentYear = currentYear-1;
        setCurrentYearMonth(currentYear+"-12");
      }
      else setCurrentYearMonth(currentYearMonth.slice(0, -2) +"0"+currentMonth)
    }
    else{
      setCurrentYearMonth(currentYearMonth.slice(0, -2) + currentMonth)
    }
  }
  async function setNextMonth(){
    var currentMonth = parseInt(currentYearMonth.slice(-2));
    currentMonth = currentMonth+1;
    if(currentMonth >= 10){
      if(currentMonth == 13){
        var currentYear = parseInt(currentYearMonth.slice(0,4))
        currentYear = currentYear+1;
        setCurrentYearMonth(currentYear+"-"+"01");
      }
      else setCurrentYearMonth(currentYearMonth.slice(0, -2)+currentMonth)
    }
    else{
      setCurrentYearMonth(currentYearMonth.slice(0, -2) + "0"+currentMonth)
    }
  }
  
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.monthlyReportModal}
      style = {monthlyReportModalStyle.modalBackGround}
      onRequestClose={() => {
          props.setMonthlyReportModal(!props.monthlyReportModal);
      }}
    >
      <Pressable style={monthlyReportModalStyle.modalBackGround}
      onPress={
        ()=>props.setMonthlyReportModal(!props.monthlyReportModal)}
      >
    </Pressable>
    <View style={monthlyReportModalStyle.nutritionalContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={monthlyReportModalStyle.cosumedDataContainer}>
          <Text style={monthlyReportModalStyle.sectionTitle}>Gastos Nutricionais {currentTimeType}</Text>
          <View style={monthlyReportModalStyle.dateInfoAndHelp}>
            <Pressable style={monthlyReportModalStyle.sectionTitle}
              onPress={()=>setPrevMonth()}
            >
              <Ionicons name="chevron-back-outline" style={monthlyReportModalStyle.monthChangerIcon}/>
            </Pressable>
            <View style={monthlyReportModalStyle.dateWithHelp}>
              <Text style={monthlyReportModalStyle.sectionTitle}>{currentYearMonth}</Text>
              <Pressable style={monthlyReportModalStyle.sectionTitle}
                onPress={() => console.log("HELP!")}
              >
                <Ionicons name="help-circle-outline" style={monthlyReportModalStyle.moreInfosIcon}/>
              </Pressable>
            </View>
            <Pressable style={monthlyReportModalStyle.sectionTitle}
              onPress={()=>setNextMonth()}
            >
              <Ionicons name="chevron-forward-outline" style={monthlyReportModalStyle.monthChangerIcon}/>
            </Pressable>
          </View>
          
          
          <View style={monthlyReportModalStyle.dataContainer}>
            {
              currentTimeType == "Mensal" ? 
              <View style={monthlyReportModalStyle.arrowIcon}></View>
              :
              <Pressable style={monthlyReportModalStyle.leftArrow} onPress={() => handleLeftArrow()}>
                <Ionicons name="chevron-back-outline" style={monthlyReportModalStyle.arrowIcon}/>
              </Pressable>
            }
            <View style={monthlyReportModalStyle.displayDataText}>
              <View style={monthlyReportModalStyle.dataTitles}>
                  {
                    nutritionalData == null ? 
                    <View style={monthlyReportModalStyle.titleAndValue}>
                    <Text>Não há informações para o intervalo informado!</Text>
                    </View>
                    :
                    Object.keys(nutritionalData).map((key)=>{
                      const attributeKeyUppercase = key.toUpperCase();
                      const value = nutritionalData[key].nutrientValue.toFixed(2);
                      const measureUnity = nutritionalData[key].nutrientMeasureUnity;

                      return(
                        <View key={key} style={monthlyReportModalStyle.titleAndValue}>
                          <Text style={monthlyReportModalStyle.attributeTitle}>{attributeKeyUppercase}:</Text>
                          {
                            value == 0.00 ? <Text style={monthlyReportModalStyle.attributeValue}>{value} </Text> :
                            <Text style={monthlyReportModalStyle.attributeValue}>{value} {measureUnity}</Text>
                          }
                          
                        </View>
                      )
                    })
                  }
              </View>
            </View>
            {
              currentTimeType == "Semana 5" ? <View style={monthlyReportModalStyle.arrowIcon}></View>
              :
              <Pressable style={monthlyReportModalStyle.rigthArrow} onPress={() => handleRightArrow() }>
                <Ionicons name="chevron-forward-outline" style={monthlyReportModalStyle.arrowIcon}/>
              </Pressable>
            }
            
          </View>
        </View>
      </ScrollView>
    </View>
    </Modal>
  )
}