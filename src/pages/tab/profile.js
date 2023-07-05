import { React} from "react"
import { SafeAreaView} from "react-native"

import tabPagesBackgroundStyle from "../../styles/pages/tab/tabPagesBackgroundStyle"
import User from "../stack/user/user"

export default function Profile({navigation}){

    return(
    <SafeAreaView style={tabPagesBackgroundStyle.middleBackground}>
        <User
        /> 
    </SafeAreaView>
    )
}