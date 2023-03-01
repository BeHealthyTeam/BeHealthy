import { Controller } from "react-hook-form"
import { View, Text, TextInput} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import formsStyle from "../../../styles/forms/formsStyle"

export default function Minerais(props){
return(
    <View>
        <View style = {formsStyle.itemsContent}>
            <View style={formsStyle.itemRow}>
                <Text style = { formsStyle.label}>Cálcio(mg):</Text>
                <Controller
                    control={props.control}
                    name="calcio"
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
                <Text style = { formsStyle.label}>Magnésio (mg):</Text>
                <Controller
                    control={props.control}
                    name="magnesio"
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
                <Text style = { formsStyle.label}>Manganês (mg):</Text>
                <Controller
                    control={props.control}
                    name="manganes"
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
                <Text style = { formsStyle.label}>Fósforo (mg):</Text>
                <Controller
                    control={props.control}
                    name="fosforo"
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
                <Text style = { formsStyle.label}>Ferro (mg):</Text>
                <Controller
                    control={props.control}
                    name="ferro"
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
                <Text style = { formsStyle.label}>Sódio (mg):</Text>
                <Controller
                    control={props.control}
                    name="sodio"
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
                <Text style = { formsStyle.label}>Potássio (mg):</Text>
                <Controller
                    control={props.control}
                    name="potassio"
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
                <Text style = { formsStyle.label}>Cobre (mg):</Text>
                <Controller
                    control={props.control}
                    name="zinco"
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
                <Text style = { formsStyle.label}>Zinco (mg):</Text>
                <Controller
                    control={props.control}
                    name="zinco"
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