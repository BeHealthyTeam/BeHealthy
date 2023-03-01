import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64


const tabPagesBackgroundStyle = StyleSheet.create({

    middleBackground:{
        backgroundColor: '#FFF0BB',
        marginTop: 10,
        flex: 1,
        borderTopWidth: 1,
    },

    sideBackground:{
        backgroundColor: 'white',
        marginTop: 10,
        borderTopWidth: 1,
        flex: 1,
    },
    middleContainer:{
        flex: 1,
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    sideMenuContainer:{
        flex: 1,
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "space-around",
    },

})

export default tabPagesBackgroundStyle;