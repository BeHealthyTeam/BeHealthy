import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const alimentoObjectStyle = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: "row",
        elevation: 10,
    },
    item:{
        paddingVertical: mobileWindow.height*0.005,
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    label:{
        fontSize: 15,
        marginBottom: 5,
        paddingHorizontal: 10,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
    },
    qtdInput:{
        fontSize: 15,
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 7,
        width: mobileWindow.width*0.15,
        height: mobileWindow.height*0.04,
        backgroundColor: 'white',
        elevation: 3,
    },
    unityContent:{
        width: mobileWindow.width*0.11,
    },
})

export default alimentoObjectStyle;