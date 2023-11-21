import { Controller } from "react-hook-form"
import { View, Text, TextInput} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import formSectionStyle from "../../../styles/forms/formSectionStyle"

export default function Minerais(props){
return(
    <View style = {formSectionStyle.itemsContent}>
        <View style={formSectionStyle.itemRow}>
            <Text style = { formSectionStyle.label}>Cálcio(mg):</Text>
            <Controller
                control={props.control}
                name="calcium"
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
            <Text style = { formSectionStyle.label}>Magnésio (mg):</Text>
            <Controller
                control={props.control}
                name="magnesium"
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
            <Text style = { formSectionStyle.label}>Manganês (mg):</Text>
            <Controller
                control={props.control}
                name="manganese"
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
            <Text style = { formSectionStyle.label}>Fósforo (mg):</Text>
            <Controller
                control={props.control}
                name="phosphor"
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
            <Text style = { formSectionStyle.label}>Ferro (mg):</Text>
            <Controller
                control={props.control}
                name="iron"
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
            <Text style = { formSectionStyle.label}>Sódio (mg):</Text>
            <Controller
                control={props.control}
                name="sodium"
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
            <Text style = { formSectionStyle.label}>Potássio (mg):</Text>
            <Controller
                control={props.control}
                name="potassium"
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
            <Text style = { formSectionStyle.label}>Zinco (mg):</Text>
            <Controller
                control={props.control}
                name="zinc"
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