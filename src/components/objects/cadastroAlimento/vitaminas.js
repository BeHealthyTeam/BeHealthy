import { Controller } from "react-hook-form"
import { View, Text, TextInput} from "react-native"
import formSectionStyle from "../../../styles/forms/formSectionStyle"

export default function Vitaminas(props){
return(
    <View style = {formSectionStyle.itemsContent}>
        <View style={formSectionStyle.itemRow}>
            <Text style = { formSectionStyle.label}>Tiamina(B12) (mg):</Text>
            <Controller
                control={props.control}
                name="b12"
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
            <Text style = { formSectionStyle.label}>Riboflavina(B2) (mg):</Text>
            <Controller
                control={props.control}
                name="b2"
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
            <Text style = { formSectionStyle.label}>Piridoxina(B6) (mg):</Text>
            <Controller
                control={props.control}
                name="b6"
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
            <Text style = { formSectionStyle.label}>Niacina(B3) (mg):</Text>
            <Controller
                control={props.control}
                name="b3"
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
            <Text style = { formSectionStyle.label}>Ácido Ascórbico(C) (mg):</Text>
            <Controller
                control={props.control}
                name="vitaminaC"
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