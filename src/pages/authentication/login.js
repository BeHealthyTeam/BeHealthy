import {View, Text, Pressable, LogBox} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useForm, Controller } from "react-hook-form";
import { Auth } from 'aws-amplify';

import AuthenticationBackgroundComponent from "../../components/utils/authenticationBackgroundComponent";
import authPagesStyle from "../../styles/pages/authentication/authPagesStyle";

export default function Login({navigation}){

    const {control, handleSubmit, formState: {errors}} = useForm({})

    async function logIn(data) {
        try {
            // await Auth.signIn(data.email, data.password);
            await Auth.signIn("squad.behealthy@gmail.com", "Behealthy2022@");
          
        } catch (error) {
          alert('Whoops! '+ error.message);
        }
      }

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);
      
    return(
    <AuthenticationBackgroundComponent
    >
        <ScrollView>
        <View style= {authPagesStyle.container}>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value} })=>(
                    <TextInput
                        style= {authPagesStyle.inputText}
                        onChangeText = {onChange}
                        onBlur = {onBlur}
                        value = {value}
                        placeholder = "E-mail"
                    />
                )}
            />
            <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value} })=>(
                <TextInput
                    style= {authPagesStyle.inputText}
                    onChangeText = {onChange}
                    onBlur = {onBlur}
                    value = {value}
                    placeholder = "Senha"
                    secureTextEntry={true}
                />
            )}
        />
        </View>
        <Pressable
        onPress={() => navigation.navigate('Register')}
        >
            <View style = {authPagesStyle.viewRegisterLabels}>
                <Text style = {authPagesStyle.registerLabel}>Não possui conta? </Text>
                <Text style = {authPagesStyle.registerLabelLink}>Registre-se</Text>
            </View>
        </Pressable>
        <Text style = {authPagesStyle.quickAcessLabel}>Acesso Rápido</Text>
        <View style = {authPagesStyle.quickAccessContainer}>
            <View style={authPagesStyle.quickAccessIconsContainer}>
                <Pressable
                onPress={()=> alert("logar com FACEBOOK")}
                >
                    <Ionicons name="logo-facebook" size={40} style={authPagesStyle.quickAccessIcons}/>
                </Pressable>
                <Pressable
                onPress={()=> alert("logar com GOOGLE")}
                >
                    <Ionicons name="logo-google" size={40} style={authPagesStyle.quickAccessIcons}/>
                </Pressable>
                <Pressable
                onPress={()=> alert("logar com INSTAGRAM")}
                >
                    <Ionicons name="logo-instagram" size={40} style={authPagesStyle.quickAccessIcons}/>
                </Pressable>
            </View>
        </View>
        <Pressable
            style={authPagesStyle.pressableText}
            onPress={
                handleSubmit(logIn)
            }
        >
            <Text style={authPagesStyle.submitText}>Confirmar</Text>
        </Pressable>
        </ScrollView>
    </AuthenticationBackgroundComponent>
    )
}