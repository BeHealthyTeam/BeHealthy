import {React, useState, useEffect } from "react"
import {StatusBar, ScrollView, View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import api from "../../services/api"
import tabPagesBackgroundStyle from "../../styles/pages/tab/tabPagesBackgroundStyle"
import TopFiveCard from "../../components/utils/topFiveCard"


export default function Feed({navigation}){

    return(
        <View style = {tabPagesBackgroundStyle.middleBackground}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style= {tabPagesBackgroundStyle.middleContainer}>
                <TopFiveCard
                title = {"TOP 5 REFEIÇÕES"}
                />
                <TopFiveCard
                title = {"TOP 5 EXERCICIOS"}
                />
                <TopFiveCard
                title = {"TOP 5 ENQUETES"}
                />
                <TopFiveCard
                title = {"TESTE"}
                />

            </View>
        </ScrollView>
        </View>
    )
}
