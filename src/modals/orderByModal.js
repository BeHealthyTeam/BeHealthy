import { View, Text, StatusBar, Modal, TextInput, Pressable} from "react-native"
import {React, useState} from "react"
import Ionicons from '@expo/vector-icons/Ionicons'

import modalOrderBy from "../styles/modals/modalOrderByStyle";

export default function OrderByModal(props){

    const [nameUpFilter, setNameUpFilter] = useState(false);
    const [dataRegistrationFilter, setDataRegistrationFilter] = useState(false);

    return(
            <Modal
                animationType="fade"
                transparent = {true}
                visible = {props.orderBy}
                style = {modalOrderBy.modalBackGround}
                onRequestClose={() => {
                    props.setOrderBy(!props.orderBy);
                }}
                >

                <Pressable 
                style = {modalOrderBy.modalBackGround}
                onPress= {
                    () => props.setOrderBy(!props.orderBy)
                }
                >
                    <View style={modalOrderBy.modalOrderByContainer}>
                        <View style={modalOrderBy.modalTitle}>
                            <Text style={modalOrderBy.textTitle}>Ordenar por:</Text>
                            <Pressable
                                onPress={() => props.setOrderBy(!props.orderBy)}
                            >
                                <Ionicons name={"chevron-down-outline"} style={modalOrderBy.closeDropDown} size={20}/>
                            </Pressable>
                        </View>

                        <View style={modalOrderBy.modalOrderByContent}>
                            <Pressable style={modalOrderBy.pressableContent}
                                onPress={() => {
                                    setNameUpFilter(!nameUpFilter)                  
                                }}
                            > 
                                <View style = {modalOrderBy.iconFilterText}>
                                    <Text> Nome </Text>
                                    <Ionicons name= {  nameUpFilter ? "caret-up-outline" : "caret-down-outline"} size={20}/>
                                </View>
                            </Pressable>

                            <Pressable style={modalOrderBy.pressableContent}
                                onPress={() => {
                                    setDataRegistrationFilter(!dataRegistrationFilter)
                                }}
                            > 
                                <View style = {modalOrderBy.iconFilterText}>
                                    <Text> Data de Cadastro </Text>
                                    <Ionicons name= {  dataRegistrationFilter ? "caret-up-outline" : "caret-down-outline"} size={20}/>
                                </View>
                            </Pressable>  
                        </View>
                    </View>
                </Pressable>
            </Modal>
    )
}
