import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const popupStyle = StyleSheet.create({

    // ---------------------> List and Edit modal <-----------------------

    modalBackGround:{
        backgroundColor: "grey",
        flex: 1,
        opacity: 0.9
    },
    modalOrderByContainer:{
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 15,
        elevation: 10,
        minHeight: "40%",
        minWidth: "85%",
        marginTop: mobileWindow.height*0.15,
        alignSelf: "center",
        paddingVertical: mobileWindow.height*0.05,
        paddingHorizontal: mobileWindow.width*0.075,
    },
    fieldsContainer:{
        marginBottom: mobileWindow.height*0.05,
    },

})

export default popupStyle;