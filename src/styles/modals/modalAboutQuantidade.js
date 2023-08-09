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
        marginTop: mobileWindow.height*0.35,
        marginHorizontal: mobileWindow.width*0.1,
        width: mobileWindow.width*0.8,
        borderRadius: 15,
        padding: 10,
        elevation: 20,
    },

})

export default modalAboutQuantidade;