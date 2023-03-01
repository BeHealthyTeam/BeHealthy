import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const alimentoObjectStyle = StyleSheet.create({

    item:{
        backgroundColor: "pink",
        paddingVertical: 10,
        borderRadius: 10,
        flex: 1,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    label:{
        textAlign: "auto",
        fontSize: 15,
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    qtdInput:{
        backgroundColor: "white",
        marginHorizontal: 10,
        width: windowWidth*0.15,
        paddingStart: 3,
        borderRadius: 5,
    }
    


})

export default alimentoObjectStyle;