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
        opacity: 0.8,
    },
    modalListFoods:{
        marginTop: mobileWindow.height*0.23,
        flex: 1,
        paddingBottom: 10,
    },
    inputRow:{
        fontSize: 15,
        width: mobileWindow.width*0.82,
        height: mobileWindow.height*0.0665,
        marginStart: mobileWindow.width*0.09,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingStart: 5,
    },
    flatListContent:{
        paddingVertical: 10,
        backgroundColor: "white",
        alignItems: "center",
        alignSelf: "center",
        minWidth: "81%",
        flex: 1,
        paddingHorizontal: mobileWindow.width*0.05,

    },
    item: {
        flex: 1,
        width: mobileWindow.width*0.71,
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
        paddingHorizontal: 2,
    },
    pressableText:{
        backgroundColor: "white",
        paddingBottom: 10,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        marginHorizontal: mobileWindow.width*0.095,
    },
    submitText:{
        fontSize: 20,
        alignSelf: "center",
        textAlign: "center",
        backgroundColor: "#4E8E4D",
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: mobileWindow.width*0.15,
    },

})

export default multiSelectFood;