import { View, Text, Modal, Pressable, Image, TextInput, ScrollView} from "react-native"
import { useForm, Controller} from "react-hook-form";
import Ionicons from '@expo/vector-icons/Ionicons'

import api from "../../../../services/api"
import { Auth } from 'aws-amplify';

import modalEditAndListStyle from "../../../../styles/modals/modalEditAndListStyle";
import popupStyle from "../../../../styles/modals/popupStyle";

export default function EditUser(props){

    const {control, handleSubmit, formState: {errors}} = useForm({});
    async function updateUser(data){
        try {
            const session = await Auth.currentSession();
            const idToken = session.getIdToken().getJwtToken();
            const user = await api.put("/users/" + Auth.user.attributes.sub,
            { 
                "name": data.name,
                "email": Auth.user.attributes.email,
                "phone": data.phone,
                "age": data.age,
                "weight": data.weight,
                "height": data.height,
                "regionalCouncilNumber": data.regionalCouncilNumber,
                "title": data.title,
            },{
                headers: {
                    "Authorization": Auth.user.signInUserSession.idToken.jwtToken
                },
            })

            props.setEditModalVisible(!props.editModalVisible)
        } catch (error) {
            alert(error.message)
        }

        
    }

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.editModalVisible}
            style = {popupStyle.modalBackGround}
            onRequestClose={() => {
                props.setEditModalVisible(!props.editModalVisible);
            }}
            >
            <Pressable 
                style = {popupStyle.modalBackGround}
                onPress= {
                    () => props.setEditModalVisible(!props.editModalVisible)
                }
            >
            </Pressable>
            <ScrollView style={popupStyle.popUpContainer} showsVerticalScrollIndicator={false}>
                <View style={modalEditAndListStyle.profileImageContainer}>
                    <Image source={{uri : 'https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2022/11/escanor.webp'}} 
                    style={modalEditAndListStyle.profileImage}/>
                </View>
                <Pressable
                style={modalEditAndListStyle.editProfileImagePressable}
                    onPress={console.log("editei")}
                >
                    <Ionicons name="brush-outline" style={modalEditAndListStyle.editProfileIcon} size={30}/>
                </Pressable>

                <View style={modalEditAndListStyle.formsContent}>
                    <View style={modalEditAndListStyle.columnDirectionInputs}>
                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    onChangeText = {onChange}
                                    onBlur = {onBlur}
                                    value = {
                                        props.userData.name == null ?
                                        null : value
                                    }
                                    style = {modalEditAndListStyle.textInput}
                                    placeholder = {
                                        props.userData.name == null ?
                                        "Name" : props.userData.name
                                    }
                                    defaultValue = {props.userData.name}
                                    placeholderTextColor={'grey'}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    onChangeText = {onChange}
                                    onBlur = {onBlur}
                                    value = {props.userData.email}
                                    style = {modalEditAndListStyle.textInput}
                                    placeholderTextColor={'grey'}
                                    editable = {false}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="phone"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    onChangeText = {onChange}
                                    onBlur = {onBlur}
                                    value = {
                                        props.userData.phone == "" || props.userData.phone == null ?
                                        null : value
                                    }
                                    style = {modalEditAndListStyle.textInput}
                                    placeholder = {
                                        props.userData.phone == "" || props.userData.phone == null ?
                                        "Telefone" : ""+props.userData.phone
                                    }
                                    placeholderTextColor={'grey'}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="regionalCouncilNumber"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    onChangeText = {onChange}
                                    onBlur = {onBlur}
                                    value = {
                                        props.userData.regionalCouncilNumber == "" || props.userData.regionalCouncilNumber == null ?
                                        null : value
                                    }
                                    style = {modalEditAndListStyle.textInput}
                                    placeholder = {
                                        props.userData.regionalCouncilNumber == "" || props.userData.regionalCouncilNumber == null ?
                                        "Número do Conselho Regional" : ""+props.userData.regionalCouncilNumber
                                    }
                                    placeholderTextColor={'grey'}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="title"
                            render={({ field: { onChange, onBlur, value} })=>(
                                <TextInput
                                    onChangeText = {onChange}
                                    onBlur = {onBlur}
                                    value = {
                                        props.userData.title == "" || props.userData.title == null ?
                                        null : value
                                    }
                                    style = {modalEditAndListStyle.textInput}
                                    placeholder = {
                                        props.userData.title == "" || props.userData.title == null ?
                                        "Título" : ""+props.userData.title
                                    }
                                    placeholderTextColor={'grey'}
                                />
                            )}
                        />
                    </View>
                    <View style={modalEditAndListStyle.rowDirectionInputs}>
                        <View style={modalEditAndListStyle.columnDirectionInputs}>
                            <Text style={modalEditAndListStyle.fieldsLabel}>Idade</Text>
                            <Controller
                                control={control}
                                name="age"
                                render={({ field: { onChange, onBlur, value} })=>(
                                    <TextInput
                                        onChangeText = {onChange}
                                        onBlur = {onBlur}
                                        style = {modalEditAndListStyle.textInputShort}
                                        keyboardType="numeric"
                                        value = {
                                            props.userData.age == "" || props.userData.age == null ?
                                            0 : props.userData.age
                                        }
                                        placeholder = {
                                            props.userData.age == "" || props.userData.age == null ?
                                            null : ""+props.userData.age
                                        }
                                    />
                                )}
                            />
                        </View> 
                        <View style={modalEditAndListStyle.columnDirectionInputs}>
                            <Text style={modalEditAndListStyle.fieldsLabel}>Peso</Text>
                            <Controller
                                control={control}
                                name="weight"
                                render={({ field: { onChange, onBlur, value} })=>(
                                    <TextInput
                                        onChangeText = {onChange}
                                        onBlur = {onBlur}
                                        value = {
                                            props.userData.weight == "" || props.userData.weight == null ?
                                            null : props.userData.weight
                                        }
                                        placeholder = {
                                            props.userData.weight == "" || props.userData.weight == null ?
                                            null : ""+props.userData.weight
                                        }
                                        style = {modalEditAndListStyle.textInputShort}
                                        keyboardType="numeric"
                                    />
                                )}
                            />
                        </View>
                        <View style={modalEditAndListStyle.columnDirectionInputs}>
                            <Text style={modalEditAndListStyle.fieldsLabel}>Altura</Text>
                            <Controller
                                control={control}
                                name="height"
                                render={({ field: { onChange, onBlur, value} })=>(
                                    <TextInput
                                        onChangeText = {onChange}
                                        onBlur = {onBlur}
                                        value = {
                                            props.userData.height == "" || props.userData.height == null ?
                                            null : props.userData.height
                                        }
                                        placeholder = {
                                            props.userData.height == "" || props.userData.height == null ?
                                            null : ""+props.userData.height
                                        }
                                        style = {modalEditAndListStyle.textInputShort}
                                        keyboardType="numeric"
                                    />
                                )}
                            />
                        </View>
                    </View>
                </View>
                <Pressable
                    onPress={handleSubmit(updateUser)}
                    style={modalEditAndListStyle.confirmButton}
                >
                    <Ionicons name="checkmark-circle-outline" size={40}/>
                </Pressable>
            </ScrollView>
        </Modal>
    )
}