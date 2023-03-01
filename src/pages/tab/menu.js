import { View, ScrollView } from "react-native"

import MenuCard from "../../components/util/menuCard";
import tabPagesBackgroundStyle from "../../styles/pages/tab/tabPagesBackgroundStyle";


export default function Menu({navigation}){
    
    return(
            <View style = {tabPagesBackgroundStyle.sideBackground}>
                <View style = {tabPagesBackgroundStyle.sideMenuContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <MenuCard 
                        navigation = {navigation}
                        moduleName = {"NUTRIÇÃO"}
                        />

                        <MenuCard 
                        navigation = {navigation}
                        moduleName = {"EXERCICIOS"}
                        />


                        <MenuCard 
                        navigation = {navigation}
                        moduleName = {"CONTATOS"}
                        />
                    </ScrollView>
                </View>
            </View>
        
    )
}
