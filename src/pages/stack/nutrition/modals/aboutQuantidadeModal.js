import { View, Text, Modal, Pressable} from "react-native"

import modalAboutQuantidade from "../../../../styles/modals/modalAboutQuantidade";

export default function AboutQuantidadeModal(props){

    return(
            <Modal
                animationType="fade"
                transparent = {true}
                visible = {props.aboutQuantidadeModal}
                style = {modalAboutQuantidade.background}
                onRequestClose={() => {
                    props.setAboutQuantidadeModal(!props.aboutQuantidadeModal);
                }}
                >

                <Pressable 
                style = {modalAboutQuantidade.background}
                onPress= {
                    () => props.setAboutQuantidadeModal(!props.aboutQuantidadeModal)
                }
                >
                    <View style={modalAboutQuantidade.container}>
                        <Text>Informe sobre a porção total o valor 0.1 = 10%, 0,2 = 20%, etc... </Text>
                        <Text>Para mais de uma porções, informe o valor inteiro (4 = 4 porções)</Text>
                    </View>
                </Pressable>
            </Modal>
    )
}
