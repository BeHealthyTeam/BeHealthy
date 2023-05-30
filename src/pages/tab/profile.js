import { React} from "react"
import { SafeAreaView} from "react-native"

import tabPagesBackgroundStyle from "../../styles/pages/tab/tabPagesBackgroundStyle"
import ProfileObjectComponent from "../../components/objects/profileObjectComponent"

export default function Profile({navigation}){

    return(
    <SafeAreaView style={tabPagesBackgroundStyle.middleBackground}>
        <ProfileObjectComponent
        /> 
    </SafeAreaView>
    )
}