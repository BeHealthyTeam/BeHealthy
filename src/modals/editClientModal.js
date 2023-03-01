import { View, Text, Modal, Pressable, Image, TextInput} from "react-native"
import { useForm, Controller} from "react-hook-form";
import Ionicons from '@expo/vector-icons/Ionicons'
import api from "../services/api";

import modalEditAndListStyle from "../styles/modals/modalEditAndListStyle";

export default function EditClienteModal(props){

    const {control, handleSubmit, formState: {errors}} = useForm({});
    async function atualizarCliente(){

    }

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.editModalVisible}
            onRequestClose={() => {
                props.setEditModalVisible(!props.editModalVisible);
            }}
            >
            <View style={modalEditAndListStyle.modalContainer}>
                <View style={modalEditAndListStyle.modalTitle}>
                    <Pressable style={[modalEditAndListStyle.button, modalEditAndListStyle.buttonClose]}
                        onPress={() => props.setEditModalVisible(!props.editModalVisible)}
                    >
                        <Ionicons name="close-outline" style={modalEditAndListStyle.closeModalIcon} size={50}/>
                    </Pressable>
                    
                </View>
                <View style={modalEditAndListStyle.modalContent}>
                    <View style={modalEditAndListStyle.clientImageModal}>
                        <Image source={{uri : 'https://1.bp.blogspot.com/-f-uoFxuuA1w/YEk3cKzId5I/AAAAAAAB9EE/7EqNddvYJH8WJz21hSuMMkvKcHhYwOd-wCLcBGAsYHQ/s1600/IMG_20210310_181523.jpg'}} 
                        style={modalEditAndListStyle.clientImageModal}/>
                    </View>
                    <View style={modalEditAndListStyle.textContent}>
                        <View style={modalEditAndListStyle.modalTextPrincipalContent}>

                            <View style={modalEditAndListStyle.modalPrincipalGrid}>
                                <Text style={modalEditAndListStyle.modalTextPrincipal}>Nome:</Text>

                                <Controller
                                    control={control}
                                    name="name"
                                    render={({ field: { onChange, onBlur, value} })=>(
                                        <TextInput
                                            onChangeText = {onChange}
                                            onBlur = {onBlur}
                                            value = {value}
                                            style = {modalEditAndListStyle.editModalInputPrincipal}
                                            placeholder= {props.cliente.nome}
                                            defaultValue= {props.cliente.nome}
                                            placeholderTextColor={'grey'}
                                        />
                                    )}
                                />
                            </View>
                            <View style={modalEditAndListStyle.modalPrincipalGrid}>
                                <Text style={modalEditAndListStyle.modalTextPrincipal}>E-mail:</Text>
                                <Controller
                                    control={control}
                                    name="email"
                                    render={({ field: { onChange, onBlur, value} })=>(
                                        <TextInput
                                            onChangeText = {onChange}
                                            onBlur = {onBlur}
                                            value = {value}
                                            style = {modalEditAndListStyle.editModalInputPrincipal}
                                            placeholder= {props.cliente.email}
                                            defaultValue= {props.cliente.email}
                                            placeholderTextColor={'grey'}
                                        />
                                    )}
                                />
                            </View>

                        </View>
                        <View style={modalEditAndListStyle.modalTextContentRow}>
                            <View style={modalEditAndListStyle.modalTextContent}>
                                <Text style={modalEditAndListStyle.modalText}>Idade:</Text>
                                <Controller
                                    control={control}
                                    name="idade"
                                    render={({ field: { onChange, onBlur, value} })=>(
                                        <TextInput
                                            onChangeText = {onChange}
                                            onBlur = {onBlur}
                                            value = {value}
                                            style = {modalEditAndListStyle.editModalInput}
                                            placeholder= {value}
                                            defaultValue= {props.cliente.idade}
                                            placeholderTextColor={'grey'}
                                        />
                                    )}
                                />
                            </View>
                            <View style={modalEditAndListStyle.modalTextContent}>
                                <Text style={modalEditAndListStyle.modalText}>Peso: </Text>
                                <Controller
                                    control={control}
                                    name="idade"
                                    render={({ field: { onChange, onBlur, value} })=>(
                                        <TextInput
                                            onChangeText = {onChange}
                                            onBlur = {onBlur}
                                            value = {value}
                                            style = {modalEditAndListStyle.editModalInput}
                                            placeholder= {props.cliente.idade}
                                            defaultValue= {props.cliente.idade}
                                            placeholderTextColor={'grey'}
                                        />
                                    )}
                                />
                            </View>
                            <View style={modalEditAndListStyle.modalTextContent}>
                                <Text style={modalEditAndListStyle.modalText}>Altura:</Text>
                                <TextInput
                                    style = {modalEditAndListStyle.editModalInput}
                                    keyboardType = "numeric"
                                    placeholder= {""+props.cliente.altura}
                                    defaultValue = {props.cliente.altura}
                                    placeholderTextColor={'grey'}
                                />
                            </View>
                            <View style={modalEditAndListStyle.modalTextContent}>
                                <Text style={modalEditAndListStyle.modalText}>IMC:</Text>
                                <Text style={modalEditAndListStyle.modalTextIMC}>{props.imc}</Text>
                            </View>
                        </View>
                        <Pressable

                            onPress={() => props.setEditModalVisible(!props.editModalVisible)}
                        >
                            <Ionicons name="checkmark-circle-outline" size={38}/>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}