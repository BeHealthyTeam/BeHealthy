import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const authBackground = StyleSheet.create({
    
    background:{
        backgroundColor: "white",
        flex: 1,
    },
    logoContainer:{
        backgroundColor: "white",
        marginTop: mobileWindow.height*0.11,
        height: mobileWindow.height*0.2,
        alignSelf: "center",    
    },
    logo:{
        width: mobileWindow.width*0.88,
        height: mobileWindow.height*0.12,
        marginHorizontal: 10,
    },

})

export default authBackground;