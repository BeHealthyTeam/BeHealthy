import { View, Text, Modal, Pressable, Image, TextInput, ScrollView} from "react-native"
import { useForm, Controller} from "react-hook-form";
import Ionicons from '@expo/vector-icons/Ionicons'

import modalEditAndListStyle from "../../../../styles/modals/modalEditAndListStyle";
import popupStyle from "../../../../styles/modals/popupStyle";

export default function DetailUser(props){

    const {control, handleSubmit, formState: {errors}} = useForm({});

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.detailUserModal}
            style = {popupStyle.modalBackGround}
            onRequestClose={() => {
                props.setDetailUserModal(!props.detailUserModal);
            }}
            >
            <Pressable 
                style = {popupStyle.modalBackGround}
                onPress= {
                    () => props.setDetailUserModal(!props.detailUserModal)
                }
            >
            </Pressable>
            <ScrollView style={popupStyle.popUpContainer} showsVerticalScrollIndicator={false}>
                <View style={modalEditAndListStyle.profileImageContainer}>
                    <Image source={{uri : 'https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2022/11/escanor.webp'}} 
                    style={modalEditAndListStyle.profileImage}/>
                </View>
                {
                    (props.userData.regionalCouncilNumber !== null) && (props.userData.title !== null) ?
                    (
                        <View style={modalEditAndListStyle.profileTitlesContent}>
                            <Text style={modalEditAndListStyle.profileTitleLabel}>{props.userData.title}</Text>
                        </View>
                    )
                    :
                    (
                       <></>
                    )
                }
                <View style={modalEditAndListStyle.formsContent}>
                    <View style={modalEditAndListStyle.textContent}>
                        <View style={modalEditAndListStyle.textRow}>
                            <View style={modalEditAndListStyle.textColumnTitle}>
                                <Text style={modalEditAndListStyle.labelTitle}>Nome:</Text>
                                <Text style={modalEditAndListStyle.labelTitle}>E-mail:</Text>
                                <Text style={modalEditAndListStyle.labelTitle}>CRN:</Text>
                                <Text style={modalEditAndListStyle.labelTitle}>Telefone:</Text>
                            </View>
                            <View style={modalEditAndListStyle.textColumnData}>
                                <Text style={modalEditAndListStyle.labelData}>{props.userData.name}</Text>
                                <Text style={modalEditAndListStyle.labelData}>{props.userData.email}</Text>
                                <Text style={modalEditAndListStyle.labelData}>{props.userData.regionalCouncilNumber}</Text>
                                <Text style={modalEditAndListStyle.labelData}>{props.userData.phone}</Text>
                            </View>
                        </View>
                        <View style={modalEditAndListStyle.textRowSmall}>
                            <View style={modalEditAndListStyle.textColumnTitle}>
                                <Text style={modalEditAndListStyle.labelTitle}>Idade:</Text>
                                <Text style={modalEditAndListStyle.labelData}>{props.userData.age}</Text>
                            </View>
                            <View style={modalEditAndListStyle.textColumnTitle}>
                                <Text style={modalEditAndListStyle.labelTitle}>Altura:</Text>
                                <Text style={modalEditAndListStyle.labelData}>{props.userData.height}</Text>
                            </View>
                            <View style={modalEditAndListStyle.textColumnTitle}>
                                <Text style={modalEditAndListStyle.labelTitle}>Peso:</Text>
                                <Text style={modalEditAndListStyle.labelData}>{props.userData.weight}</Text>
                            </View>
                            
                            <View style={modalEditAndListStyle.textColumnTitle}>
                                <Text style={modalEditAndListStyle.labelTitle}>IMC:</Text>
                                <Text style={modalEditAndListStyle.labelData}>{
                                    props.userData.age !== null || props.userData.weight !== null ?
                                    ""+(props.userData.weight/(Math.pow(props.userData.height/100), 2)).toFixed(2) : "X"
                                }</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Modal>
    )
}