import { Controller } from "react-hook-form"
import { View, Text, TextInput} from "react-native"

import formSectionStyle from "../../../styles/forms/formSectionStyle"

export default function AcidosGraxos(props){
return(
    <View style={formSectionStyle.itemsContent}> 
        <View style={formSectionStyle.itemRow}>
            <Text style = {formSectionStyle.label}>Colesterol (mg):</Text>
            <Controller
                control={props.control}
                name="colesterol"
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
        <View style={formSectionStyle.itemRow}>
            <Text style = {formSectionStyle.label}>Saturados (g):</Text>
            <Controller
                control={props.control}
                name="saturados"
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
        <View style={formSectionStyle.itemRow}>
            <Text style = {formSectionStyle.label}>Monoinsaturados (g):</Text>
            <Controller
                control={props.control}
                name="monoinsturados"
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
        <View style={formSectionStyle.itemRow}>
            <Text style = {formSectionStyle.label}>Poli-insaturados (mg):</Text>
            <Controller
                control={props.control}
                name="polinsaturados"
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