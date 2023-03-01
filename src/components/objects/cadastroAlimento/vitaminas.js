import { Controller } from "react-hook-form"
import { View, Text, TextInput} from "react-native"
import formsStyle from "../../../styles/forms/formsStyle"

export default function Vitaminas(props){
return(
    <View>
        <View style = {formsStyle.itemsContent}>
            <View style={formsStyle.itemRow}>
                <Text style = { formsStyle.label}>Tiamina(B12) (mg):</Text>
                <Controller
                    control={props.control}
                    name="b12"
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
                <Text style = { formsStyle.label}>Riboflavina(B2) (mg):</Text>
                <Controller
                    control={props.control}
                    name="b2"
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
                <Text style = { formsStyle.label}>Piridoxina(B6) (mg):</Text>
                <Controller
                    control={props.control}
                    name="b6"
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
                <Text style = { formsStyle.label}>Niacina(B3) (mg):</Text>
                <Controller
                    control={props.control}
                    name="b3"
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
                <Text style = { formsStyle.label}>Ácido Ascórbico(C) (mg):</Text>
                <Controller
                    control={props.control}
                    name="vitaminaC"
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