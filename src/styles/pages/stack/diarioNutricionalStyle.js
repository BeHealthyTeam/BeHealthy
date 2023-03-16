import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const diarioNutricionalStyle = StyleSheet.create({

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
        marginHorizontal: mobileWindow.width-430,
        marginVertical: 20,
        borderRadius: 5,
        elevation: 1,
    },
    item:{
        paddingVertical: 7,
        paddingHorizontal: 15,
        flex: 1,
    },
    itemRow:{
        flexDirection: "row",
        alignContent: "space-around",
        
    },
    itemColumn:{
        flexDirection: "column",
        alignContent: "space-around",
        flex: 1,
    },
    label:{
        fontSize: 15,
        marginBottom: 5,
        paddingStart: 2,
    },
    labelName:{
        fontSize: 15,
        marginBottom: 5,
        paddingStart: 2,
        alignSelf: "flex-start",
    },
    inputRow:{
        fontSize: 15,
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        padding: 7,
        backgroundColor: 'white',

    },
    input:{
        fontSize: 15,
        borderRadius: 10,
        borderWidth: 1,
        padding: 7,
        width: 70,
        backgroundColor: 'white',
    },
    rowContent:{
        flexDirection: "row",
        paddingBottom: 10,
        paddingTop: 7,
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
    pressableText:{
        backgroundColor: "skyblue",
        borderRadius: 10,
    },
    submitText:{
        paddingTop: -10,
        fontSize: 20,
        alignSelf: "center",
    },
    pressableAddFoodsToRecipe:{
        backgroundColor: "blue",
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        justifyContent: "center",
    },
    inputPressableField:{
        fontSize: 15,
        paddingStart: 5,
        color: "grey",
        backgroundColor: 'white',
    },    


})

export default diarioNutricionalStyle;