import { Controller } from "react-hook-form"
import { View, Text, TextInput} from "react-native"
import formsStyle from "../../../styles/forms/formsStyle"

export default function AcidosGraxos(props){
return(
    <View style={formsStyle.itemsContent}> 
        <View style={formsStyle.itemRow}>
            <Text style = { formsStyle.label}>Colesterol (mg):</Text>
            <Controller
                control={props.control}
                name="colesterol"
                render={({ field: { onChange, onBlur, value} })=>(
                    <TextInput
                        style = {formsStyle.input}
                        onChangeText = {onChange}
                        onBlur = {onBlur}
                        value = {value}
                        defaultValue = '0'
                        keyboardType="phone-pad"
                    />
                )}
            />
        </View>
        <View style={formsStyle.itemRow}>
            <Text style = { formsStyle.label}>Saturados (g):</Text>
            <Controller
                control={props.control}
                name="saturados"
                render={({ field: { onChange, onBlur, value} })=>(
                    <TextInput
                        style = {formsStyle.input}
                        onChangeText = {onChange}
                        onBlur = {onBlur}
                        value = {value}
                        defaultValue = '0'
                        keyboardType="phone-pad"
                    />
                )}
            />
        </View>
        <View style={formsStyle.itemRow}>
            <Text style = { formsStyle.label}>Monoinsaturados (g):</Text>
            <Controller
                control={props.control}
                name="monoinsturados"
                render={({ field: { onChange, onBlur, value} })=>(
                    <TextInput
                        style = {formsStyle.input}
                        onChangeText = {onChange}
                        onBlur = {onBlur}
                        value = {value}
                        defaultValue = '0'
                        keyboardType="phone-pad"
                    />
                )}
            />
        </View>
        <View style={formsStyle.itemRow}>
            <Text style = { formsStyle.label}>Poli-insaturados (mg):</Text>
            <Controller
                control={props.control}
                name="polinsaturados"
                render={({ field: { onChange, onBlur, value} })=>(
                    <TextInput
                        style = {formsStyle.input}
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