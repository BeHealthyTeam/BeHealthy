import { Controller } from "react-hook-form"
import { View, Text, TextInput} from "react-native"
import formsStyle from "../../../styles/forms/formsStyle"

export default function Caloria(props){
return(
    <View style={formsStyle.itemsContent}>
        <View style={formsStyle.itemRow}>
            <Text style = { formsStyle.label}>Energia (Kcal):</Text>
            <Controller
                control={props.control}
                name="energia"
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