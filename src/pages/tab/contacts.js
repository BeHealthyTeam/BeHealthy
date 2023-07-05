import { View, ScrollView } from "react-native"
import tabPagesBackgroundStyle from "../../styles/pages/tab/tabPagesBackgroundStyle";

export default function Contacts({navigation}){
    
    return(
        <View style = {tabPagesBackgroundStyle.sideBackground}>
            <View style = {tabPagesBackgroundStyle.sideMenuContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>                

                </ScrollView>
            </View>
    </View>
        
    )
}
