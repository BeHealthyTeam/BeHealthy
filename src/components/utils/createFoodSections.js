import { View, Pressable, Text} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import formCreateStyle from "../../styles/forms/formCreateStyle";

import Caloria from "../objects/cadastroAlimento/calorias";
import Fibras from "../objects/cadastroAlimento/fibras";
import AcidosGraxos from "../objects/cadastroAlimento/acidosGraxos";
import Macronutrientes from "../objects/cadastroAlimento/macronutrientes";
import Minerais from "../objects/cadastroAlimento/minerais";
import Vitaminas from "../objects/cadastroAlimento/vitaminas";

 
export default function CreateFoodSection(props){
    return(
        <View>
            <Pressable
                onPress={
                    () => props.setOpenSection(!props.openSection)
                }
                >
                    <View style = {formCreateStyle.rowDirection}>
                        <Text style={formCreateStyle.sectionTitle}>{props.sectionTitle}</Text>
                        <Ionicons name={props.openSection ? "chevron-down-outline" : "chevron-forward-outline"} size={20}/>
                    </View>
            </Pressable>
                {
                    props.openSection && props.sectionTitle == "CALORIAS" ? 
                    <View style={formCreateStyle.itemRow}>
                        <Caloria control = {props.control} />
                    </View> : <></>
                }
                {
                    props.openSection && props.sectionTitle == "FIBRAS" ? 
                    <View style={formCreateStyle.itemRow}>
                        <Fibras control = {props.control} />
                    </View> : <></>
                }
                {
                    props.openSection && props.sectionTitle == "ÁCIDOS GRAXOS" ? 
                    <View style={formCreateStyle.itemRow}>
                        <AcidosGraxos control = {props.control} />
                    </View> : <></>
                }
                {
                    props.openSection && props.sectionTitle == "MACRONUTRIENTES" ? 
                    <View style={formCreateStyle.itemRow}>
                        <Macronutrientes control = {props.control} />
                    </View> : <></>
                }
                {
                    props.openSection && props.sectionTitle == "MINERAIS" ? 
                    <View style={formCreateStyle.itemRow}>
                        <Minerais control = {props.control} />
                    </View> : <></>
                }
                {
                    props.openSection && props.sectionTitle == "VITAMINAS" ? 
                    <View style={formCreateStyle.itemRow}>
                        <Vitaminas control = {props.control} />
                    </View> : <></>
                }
        </View>
    )
}