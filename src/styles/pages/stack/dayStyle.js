import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const dayStyle = StyleSheet.create({

    dataStringContent:{
        marginVertical: mobileWindow.height*0.03,
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: mobileWindow.width*0.2,
    },
    dateLabel:{
        fontWeight: "bold",
        fontSize: 20,
        elevation: 20,
    },
    titleLabel:{
        fontWeight: "bold",
        fontSize: 15, 
        elevation: 20,
        marginBottom: -mobileWindow.height*0.02,
    },
    modulesContent:{
        flexDirection: "column",
        alignContent: "space-around"
    },
    iconContainer:{
        flexDirection: "row",
        justifyContent: "space-around"
    },
    iconPressable:{
        marginVertical: -10,
    },
    icon:{
        fontSize: 40,
    },
    modulesContentData:{
        flexDirection: "column",
        paddingVertical: 5,
    },
    turnContainer:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#4E8E4D",
        elevation: 3,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    foodContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
    },
    foodText:{
        paddingEnd: 10,
    },
    addIcon:{
        alignSelf: "center",
        marginBottom: -15,
        marginTop: 5,
        fontSize: 30,
    },
    editIcon:{
        alignSelf: "flex-end",
        marginBottom: -15,
        fontSize: 30,
        elevation: 10,
    },
    removeIcon:{
        alignSelf: "flex-end",
        marginTop: -15,
        fontSize: 30,
        elevation: 10,
    },
})

export default dayStyle;