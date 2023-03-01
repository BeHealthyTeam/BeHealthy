import { Controller } from "react-hook-form"
import { View, Text, TextInput} from "react-native"
import formsStyle from "../../../styles/forms/formsStyle"

export default function Macronutrientes(props){
return(
    <View>
        <View style = {formsStyle.itemsContent}>
            <View style={formsStyle.itemRow}>
                <Text style = { formsStyle.label}>Proteína(g):</Text>
                <Controller
                    control={props.control}
                    name="proteina"
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
        <View style = {formsStyle.itemsContent}>
            <View style={formsStyle.itemRow}>
                <Text style = { formsStyle.label}>Lipídeos(g):</Text>
                <Controller
                    control={props.control}
                    name="lipideos"
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
        <View style = {formsStyle.itemsContent}>
            <View style={formsStyle.itemRow}>
                <Text style = { formsStyle.label}>Carboidratos(g):</Text>
                <Controller
                    control={props.control}
                    name="carbo"
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
    </View>
)}