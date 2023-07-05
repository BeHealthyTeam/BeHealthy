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
                name="cholesterol"
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
                name="saturated"
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
                name="monounsaturated"
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
                name="polyunsaturated"
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