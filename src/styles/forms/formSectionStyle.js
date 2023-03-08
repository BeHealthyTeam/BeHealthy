import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");


const formSectionStyle = StyleSheet.create({

    container:{
        backgroundColor: "#007334",
        paddingHorizontal: statusBarWidth-20,
        paddingTop: 10,
        paddingBottom: 30,
        flex: 1,
    },
    content:{
        backgroundColor: '#FDFBE8',
        paddingStart: 20,
        paddingEnd: 30,
        paddingVertical: 10,
        marginHorizontal: mobileWindow.width*0.1,
        marginVertical: 20,
        borderRadius: 10,
        elevation: 1,
    },
    item:{
        paddingVertical: 7,
        flex: 1,
    },
    itemRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
    },
    itemColumn:{
        flexDirection: "column",
        alignContent: "space-around",
        flex: 1,
    },
    label:{
        fontSize: 15,
        marginBottom: 5,
        paddingTop: 5,
        fontWeight: "bold",
        color: "white",
    },
    labelName:{
        fontSize: 15,
        marginBottom: 5,
        paddingStart: 2,
        alignSelf: "flex-start",
    },
    inputRow:{
        fontSize: 15,
        borderRadius: 10,
        borderWidth: 1,
        padding: 7,
        backgroundColor: 'white',
    },
    input:{
        fontSize: 15,
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 7,
        width: mobileWindow.width*0.15,
        height: mobileWindow.height*0.04,
        backgroundColor: 'white',
        elevation: 3,
    },
    rowContent:{
        flexDirection: "row",
        paddingBottom: 10,
    },
    columnContent:{
        flexDirection: "column",
        marginEnd: 15,
        paddingBottom: 10,
        paddingTop: 7,
    },
    scrollStyle:{
        width: "100%",
    },
    itemsContent:{
        backgroundColor: "#4E8E4D",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        maxWidth: mobileWindow.width*0.8,
        marginStart: mobileWindow.width*0.04,
        elevation: 5,
        flex: 0.95,
    },
    labelQuantidade:{
        fontSize: 15,
    },
    pressableAddFoodsToRecipe:{
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
    },


})

export default formSectionStyle;