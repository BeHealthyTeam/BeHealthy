import { View, Text, StatusBar, Modal, TextInput, Pressable} from "react-native"
import {React, useState} from "react"

import modalSelectUnityCadAlimentoStyle from "../../../../styles/modals/modalSelectUnityCadAlimentoStyle"

export default function SelectUnityCadAlimentoModal(props){

    return(
            <Modal
                animationType="fade"
                transparent = {true}
                visible = {props.unidadeModal}
                style = {modalSelectUnityCadAlimentoStyle.modalBackGround}
                onRequestClose={() => {
                    props.setUnidadeModal(!props.unidadeModal);
                }}
            >

                <Pressable 
                style = {modalSelectUnityCadAlimentoStyle.modalBackGround}
                onPress= {
                    () => props.setUnidadeModal(!props.unidadeModal)
                }
                >   
                </Pressable>
                <Pressable 
                    style = {modalSelectUnityCadAlimentoStyle.buttonUnidade}
                    onPress = {
                        () => props.setUnidadeModal(!props.unidadeModal)
                    }
                    >
                </Pressable>
                <View style = {modalSelectUnityCadAlimentoStyle.modalOrderByContainer}>
                    <View style = {modalSelectUnityCadAlimentoStyle.modalContent}>
                        <Pressable
                            style = {modalSelectUnityCadAlimentoStyle.pressOptionModal}
                            onPress={
                                () => {
                                    props.setUnidadeModal(!props.unidadeModal)
                                    props.setUnidadeValue("kg")
                                }
                            }
                        >
                            <Text style = {modalSelectUnityCadAlimentoStyle.label}>kg</Text>
                        </Pressable>
                        <Pressable
                            style = {modalSelectUnityCadAlimentoStyle.pressOptionModal}
                            onPress={
                                () => {
                                    props.setUnidadeModal(!props.unidadeModal)
                                    props.setUnidadeValue("mg")
                                }   
                            }
                        >
                            <Text style = {modalSelectUnityCadAlimentoStyle.label}>mg</Text>
                        </Pressable>
                        <Pressable
                            style = {modalSelectUnityCadAlimentoStyle.pressOptionModal}
                            onPress={
                                () => {
                                    props.setUnidadeModal(!props.unidadeModal)
                                    props.setUnidadeValue("g")
                                }
                            }
                        >
                            <Text style = {modalSelectUnityCadAlimentoStyle.label}>g</Text>
                        </Pressable>
                        <Pressable
                            style = {modalSelectUnityCadAlimentoStyle.pressOptionModal}
                            onPress={
                                () => {
                                    props.setUnidadeModal(!props.unidadeModal)
                                    props.setUnidadeValue("l")
                                }
                            }
                        >
                            <Text style = {modalSelectUnityCadAlimentoStyle.label}>l</Text>
                        </Pressable>
                        <Pressable
                            style = {modalSelectUnityCadAlimentoStyle.pressOptionModal}
                            onPress={
                                () => {
                                    props.setUnidadeModal(!props.unidadeModal)
                                    props.setUnidadeValue("ml")
                                }
                            }
                        >
                            <Text style = {modalSelectUnityCadAlimentoStyle.label}>ml</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
    )
}
