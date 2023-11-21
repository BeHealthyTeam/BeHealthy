import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");


const formsBackgroundStyle = StyleSheet.create({

    background:{
        backgroundColor: "#FFF0BB",
        paddingHorizontal: mobileWindow.width*0.05,
        flex: 1,
    },
    container:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginVertical: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#CF6766",
        elevation: 1,
    },
    pressableText:{
        backgroundColor: "#4E8E4D",
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: "center",
        alignContent: "center",
        maxWidth: mobileWindow.width*0.5,
        minWidth: mobileWindow.width*0.4,
        minHeight: mobileWindow.height*0.06,
        maxHeight: mobileWindow.height*0.08,
        paddingTop: 5,
        marginBottom: 15,
    },
    submitText:{
        fontSize: 20,
        alignSelf: "center",
        color: "white",
    },
    titleText:{
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold"
    },
    iconsContainer:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        marginTop: mobileWindow.height*0.03,
    },
    icon:{
        fontSize: 35,
    },

})

export default formsBackgroundStyle;