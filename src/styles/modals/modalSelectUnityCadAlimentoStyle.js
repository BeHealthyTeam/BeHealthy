import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

import formsCadAlimentoStyle from "../forms/formCreateStyle";
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const modalSelectUnityCadAlimentoStyle = StyleSheet.create({

    modalBackGround:{
        backgroundColor: "grey",
        flex: 1,
        opacity: 0.9
    },
    buttonUnidade:{
        position: "absolute",
        backgroundColor: "white",
        marginTop: mobileWindow.height*0.145,
        marginStart: mobileWindow.width*0.74,
        width: mobileWindow.width*0.17,
        height:mobileWindow.height*0.06,
        borderRadius: 10,
        elevation: 10,
    },
    modalOrderByContainer:{
        position: "absolute",
        backgroundColor: "white",
        marginTop: mobileWindow.height*0.21,
        marginStart: mobileWindow.width*0.61,
        borderRadius: 10,
        minWidth: mobileWindow.width*0.3,
        minHeight: mobileWindow.height*0.3,
    },
    modalContent:{
        flexDirection: "column",
        paddingHorizontal: mobileWindow.width*0.07,
        paddingVertical: mobileWindow.height*0.01,
    },
    pressOptionModal:{
        backgroundColor: "#4E8E4D",
        marginVertical: 3,
        borderRadius: 10,
    },
    label:{
        paddingHorizontal: 15,
        paddingVertical: 7,
        textAlign: "center",
    },
})

export default modalSelectUnityCadAlimentoStyle;