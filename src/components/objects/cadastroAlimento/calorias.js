import { Controller } from "react-hook-form"
import { View, Text, TextInput} from "react-native"

import formSectionStyle from "../../../styles/forms/formSectionStyle"

export default function Caloria(props){
return(
    <View style={formSectionStyle.itemsContent}>
        <View style={formSectionStyle.itemRow}>
            <Text style = {formSectionStyle.label}>Energia (Kcal):</Text>
            <Controller
                control={props.control}
                name="energia"
                render={({ field: { onChange, onBlur, value} })=>(
                    <TextInput
                        style = {formSectionStyle.input}
                        onChangeText = {onChange}
                        onBlur = {onBlur}
                        value = {value}
                        defaultValue = '0'
                        keyboardType="phone-pad"
                    />
                )}
            />
        </View>
    </View>

)}