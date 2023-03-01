import { View, Text, Modal, Pressable, Image, TextInput} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

import modalEditAndListStyle from "../styles/modals/modalEditAndListStyle";

export default function ListClientModal(props){
    return(
        <Modal
            animationType="fade"
            transparent={false}
            visible={props.listModalVisible}
            onRequestClose={() => {
                props.setListModalVisible(!props.listModalVisible);
            }}
        >
        <View style={modalEditAndListStyle.modalContainer}>
            <View style={modalEditAndListStyle.modalTitle}>
                <Pressable style={[modalEditAndListStyle.button, modalEditAndListStyle.buttonClose]}
                    onPress={() => props.setListModalVisible(!props.listModalVisible)}
                >
                    <Ionicons name={"close-outline" } style={modalEditAndListStyle.closeModalIcon} size={50}/>
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
                        <Text style={modalEditAndListStyle.modalTextPrincipal}>{props.cliente.nome}</Text>
                    </View>
                    <View style={modalEditAndListStyle.modalPrincipalGrid}>
                        <Text style={modalEditAndListStyle.modalTextPrincipal}>E-mail:</Text>
                        <Text style={modalEditAndListStyle.modalTextPrincipal}>{props.cliente.email}</Text>
                    </View>

                </View>
                <View style={modalEditAndListStyle.modalTextContentRow}>
                    <View style={modalEditAndListStyle.modalTextContent}>
                        <Text style={modalEditAndListStyle.modalText}>Idade:</Text>
                        <Text style={modalEditAndListStyle.modalText}>{props.cliente.idade}</Text>
                    </View>
                    <View style={modalEditAndListStyle.modalTextContent}>
                        <Text style={modalEditAndListStyle.modalText}>Peso: </Text>
                        <Text style={modalEditAndListStyle.modalText}>{props.cliente.peso}</Text>
                    </View>
                    <View style={modalEditAndListStyle.modalTextContent}>
                        <Text style={modalEditAndListStyle.modalText}>Altura:</Text>
                        <Text style={modalEditAndListStyle.modalText}>{props.cliente.altura}</Text>
                    </View>
                    <View style={modalEditAndListStyle.modalTextContent}>
                        <Text style={modalEditAndListStyle.modalText}>IMC:</Text>
                        <Text style={modalEditAndListStyle.modalText}>{props.imc}</Text>
                    </View>
                </View>
                    <View style = {modalEditAndListStyle.listClienteButtons}>

                            <Ionicons name="create-outline" size={38} style = {modalEditAndListStyle.cardButton}
                                onPress={() => {
                                    props.setListModalVisible(!props.listModalVisible)
                                    props.setEditModalVisible(!props.editModalVisible)
                                }
                            }/>

                            <Ionicons name="trash-outline" size={38} style = {modalEditAndListStyle.cardButton}
                                onPress={() => alert("Você deseja mesmo excluir esse cliente?")}/>
                    </View>
            </View>
          </View>
        </View>
      </Modal>  
    )
}
