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
        opacity: 0.75
    },
    buttonUnidade:{
        position: "absolute",
        backgroundColor: "white",
        marginTop: 123,
        marginStart: mobileWindow.width-118,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        width: 59,
        height:42,
    },
    modalOrderByContainer:{
        position: "absolute",
        backgroundColor: "white",
        marginTop: 166,
        marginStart: mobileWindow.width-183,
        marginEnd: mobileWindow.width,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        width: "30%",
        height:"30%",
        opacity: 0.75,
    },
    modalContent:{
        flexDirection: "row",
        justifyContent: "center",

    },
    pressOptionModal:{
        backgroundColor: "lightgreen",
        marginVertical: 5,
        borderRadius: 10,
    },
    label:{
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
})

export default modalSelectUnityCadAlimentoStyle;