import { View, ScrollView } from "react-native"

import MenuCard from "../../components/utils/menuCard";
import tabPagesBackgroundStyle from "../../styles/pages/tab/tabPagesBackgroundStyle";
import Clients from "../../components/modules/clients";
import Nutrition from "../../components/modules/nutrition";
import Exercices from "../../components/modules/exercices";


export default function Menu({navigation}){

    const permissions = {
        accountType: "admin", // admin, profissional e client
        modulesPermissions:{
            nutrition: ["full"],
            gym: ["full"],
            clients: ["full"],
        }
    }
    
    return(
            <View style = {tabPagesBackgroundStyle.sideBackground}>
                <View style = {tabPagesBackgroundStyle.sideMenuContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        {
                            permissions.accountType == "admin" ? 
                                <MenuCard 
                                navigation = {{navigation}}
                                moduleName = {"CLIENTES"}
                                modulesPermissions = {permissions.modulesPermissions.nutrition}
                                >
                                    <Clients/>
                                </MenuCard>
                                : <></>
                        }

                                <MenuCard 
                                navigation = {{navigation}}
                                moduleName = {"NUTRIÇÃO"}
                                modulesPermissions = {permissions.modulesPermissions.nutrition}
                                >
                                    <Nutrition/>
                                </MenuCard>

                                <MenuCard 
                                navigation = {{navigation}}
                                moduleName = {"EXERCÍCIOS"}
                                modulesPermissions = {permissions.modulesPermissions.nutrition}
                                >
                                    <Exercices/>
                                </MenuCard>

                    </ScrollView>
                </View>
            </View>
        
    )
}
