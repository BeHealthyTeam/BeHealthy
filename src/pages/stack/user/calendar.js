import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Calendar, LocaleConfig } from "react-native-calendars";

import api from "../../../services/api";
import Food from "../nutrition/components/food";

import formsBackgroundStyle from "../../../styles/forms/formsBackgroundStyle";
import calendarStyle from "../../../styles/componentUtils/calendarStyle";

LocaleConfig.locales['br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: "Hoje"
  };
  LocaleConfig.defaultLocale = 'br';


export default function ControlCalendar({ navigation }) {
  const[controlMarkedDates, setControlMarkedDates] = useState({})

  const getCurrentDate=()=>{
    var date = new Date().getDate();
    if(date<10){
      date = "0"+date
    }
    var month = new Date().getMonth() + 1;
    if(month<10){
      month = "0"+month
    }
    var year = new Date().getFullYear();
    return year + '-' + month + '-' + date; //format: y-m-d;
  }

  const nut = {key: 'nutrition', color: 'black', selectedDotColor: '#587653'};
  const exer = {key: 'exercices', color: 'black', selectedDotColor: '#30415D'};
  const psy = {key: 'psychological', color: 'black', selectedDotColor: '#CF6766'};
  return (
    <View style={formsBackgroundStyle.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {formsBackgroundStyle.container}>
          <Calendar
            markingType={'multi-dot'}
            style={calendarStyle.content}
            headerStyle={calendarStyle.header}
            theme={calendarStyle.theme}
            // Specify the current date
            current={getCurrentDate()}
            // Callback that gets called when the user selects a day
            onDayPress={day => {
              console.log('selected day', day);
              
              let markedDatasss = {
                [day.dateString] : {dots: [nut, exer, psy], selected: true, selectedColor: 'white'}
              }
              setControlMarkedDates(
                {...controlMarkedDates, ...markedDatasss}
              )
              console.log(controlMarkedDates)
            }}
            // Mark specific dates as marked
            markedDates = {controlMarkedDates}
          />
        </View>
      </ScrollView>
    </View>
  )
}