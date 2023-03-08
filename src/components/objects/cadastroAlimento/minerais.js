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
                name="calcio"
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
            <Text style = { formSectionStyle.label}>Magnésio (mg):</Text>
            <Controller
                control={props.control}
                name="magnesio"
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
            <Text style = { formSectionStyle.label}>Manganês (mg):</Text>
            <Controller
                control={props.control}
                name="manganes"
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
            <Text style = { formSectionStyle.label}>Fósforo (mg):</Text>
            <Controller
                control={props.control}
                name="fosforo"
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
            <Text style = { formSectionStyle.label}>Ferro (mg):</Text>
            <Controller
                control={props.control}
                name="ferro"
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
            <Text style = { formSectionStyle.label}>Sódio (mg):</Text>
            <Controller
                control={props.control}
                name="sodio"
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
            <Text style = { formSectionStyle.label}>Potássio (mg):</Text>
            <Controller
                control={props.control}
                name="potassio"
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
            <Text style = { formSectionStyle.label}>Cobre (mg):</Text>
            <Controller
                control={props.control}
                name="zinco"
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
            <Text style = { formSectionStyle.label}>Zinco (mg):</Text>
            <Controller
                control={props.control}
                name="zinco"
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