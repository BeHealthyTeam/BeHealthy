import { Controller } from "react-hook-form"
import { View, Text, TextInput} from "react-native"
import formSectionStyle from "../../../styles/forms/formSectionStyle"

export default function Macronutrientes(props){
return(
    <View style = {formSectionStyle.itemsContent}>
        <View style={formSectionStyle.itemRow}>
            <Text style = { formSectionStyle.label}>Proteína(g):</Text>
            <Controller
                control={props.control}
                name="protein"
                render={({ field: { onChange, onBlur, value} })=>(
                    <TextInput
                        style = {formSectionStyle.input}
                        onChangeText = {onChange}
                        onBlur = {onBlur}
                        value = {value}
                        defaultValue = '0'
                        keyboardType="numeric"
                    />
                )}
            />
        </View>
        <View style={formSectionStyle.itemRow}>
            <Text style = { formSectionStyle.label}>Lipídeos(g):</Text>
            <Controller
                control={props.control}
                name="lipids"
                render={({ field: { onChange, onBlur, value} })=>(
                    <TextInput
                        style = {formSectionStyle.input}
                        onChangeText = {onChange}
                        onBlur = {onBlur}
                        value = {value}
                        defaultValue = '0'
                        keyboardType="numeric"
                    />
                )}
            />
        </View>
        <View style={formSectionStyle.itemRow}>
            <Text style = { formSectionStyle.label}>Carboidratos(g):</Text>
            <Controller
                control={props.control}
                name="carbo"
                render={({ field: { onChange, onBlur, value} })=>(
                    <TextInput
                        style = {formSectionStyle.input}
                        onChangeText = {onChange}
                        onBlur = {onBlur}
                        value = {value}
                        defaultValue = '0'
                        keyboardType="numeric"
                    />
                )}
            />
        </View>
    </View>

)}