import { React,useContext} from "react"
import { SafeAreaView} from "react-native"

import tabPagesBackgroundStyle from "../../styles/pages/tab/tabPagesBackgroundStyle"
import ProfileObjectComponent from "../../components/objects/profileObjectComponent"
import { Button } from "react-native-elements"

export default function Profile({route, navigation}){
    const {AuthContext} = route.params;

    return(
    <SafeAreaView style={tabPagesBackgroundStyle.middleBackground}>
        <ProfileObjectComponent
            AuthContext = {AuthContext}
        /> 
    </SafeAreaView>
    )
}