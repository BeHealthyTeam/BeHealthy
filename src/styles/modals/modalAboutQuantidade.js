import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const modalAboutQuantidade = StyleSheet.create({

    background: {
        backgroundColor: "grey",
        opacity: 0.75,
        flex: 1,
    },
    container:{
        position: "absolute",
        backgroundColor: "white",
        marginTop: 207,
        marginStart: mobileWindow.width-250,
        width: 200,
        borderRadius: 15,
        padding: 10,
        flexWrap: "nowrap",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

})

export default modalAboutQuantidade;