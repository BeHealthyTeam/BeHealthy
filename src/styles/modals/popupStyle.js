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
    popUpContainer:{
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 15,
        elevation: 20,
        minWidth: "85%",
        alignSelf: "center",
        marginVertical: "10%",
        maxHeight: mobileWindow.height*0.8,
        paddingVertical: mobileWindow.height*0.05,
        paddingHorizontal: mobileWindow.width*0.075,
    },
    multiSelectPopUpContainer:{
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 15,
        elevation: 20,
        minWidth: "97%",
        alignSelf: "center",
        marginVertical: "10%",
        maxHeight: mobileWindow.height*0.8,
        paddingVertical: mobileWindow.height*0.05,
        paddingHorizontal: mobileWindow.width*0.075,
    },
    fieldsContainer:{
        marginBottom: mobileWindow.height*0.05,
    },

})

export default popupStyle;