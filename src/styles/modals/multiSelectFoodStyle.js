import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const multiSelectFood = StyleSheet.create({

    modalBackGround:{
        flex: 1,
        backgroundColor: "grey",
        opacity: 0.75,
    },
    modalListFoods:{
        marginTop: 211,
        flex: 1,
        paddingBottom: 10,
        marginEnd: 10,
    },
    inputRow:{
        fontSize: 15,
        width: "78%",
        marginStart: mobileWindow.width*0.11,
        borderRadius: 11,
        borderWidth: 1,
        padding: 7,
        backgroundColor: 'white',
        alignSelf: "flex-start",
        height: 45,
    },
    flatListContent:{
        backgroundColor: "white",
        alignItems: "center",
        flex: 1,
        marginHorizontal: mobileWindow.width*0.11,
        paddingBottom: 10,
    },
    item: {
        flex: 0.9,
        width: mobileWindow.width*0.7,
        paddingVertical: 10,
        marginVertical: 5,
        borderRadius: 7,
    },
    titleRow:{
        flex: 1,
        flexDirection:"row",
        justifyContent: "space-between",
    },
    title:{
        fontSize: 17,
        textAlign: "center",
        paddingStart: 5,
        paddingEnd: 5,
    },
    pressableText:{
        backgroundColor: "white",
        paddingBottom: 10,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        marginHorizontal: mobileWindow.width*0.11,
    },
    submitText:{
        fontSize: 20,
        alignSelf: "center",
        textAlign: "center",
        backgroundColor: "skyblue",
        borderRadius: 10,
        width: "50%",
        paddingVertical: 2,
        
    },

})

export default multiSelectFood;