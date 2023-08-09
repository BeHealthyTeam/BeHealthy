import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";
import { color } from "react-native-elements/dist/helpers";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");


const formCreateStyle = StyleSheet.create({

// CREATE FOOD THINGS

    formContainer:{
        flex: 1,
    },
    itemRow:{
        flexDirection: "row",
        alignContent: "space-between",
    },
    itemColumnName:{
        flexDirection: "column",
        flex: 1,
        marginEnd: 15,
    },
    inputRow:{
        fontSize: 15,
        borderRadius: 10,
        borderWidth: 1,
        padding: 7,
        backgroundColor: 'white',
        height: 45,
        elevation: 2,
    },
    inputPressableField:{
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        backgroundColor: 'white',
        color: "grey",
    },
    unidadeLabel:{
        fontSize: 15,
        color: "black",
        alignSelf: "center",
        padding: 7
    },
    nutrientsSections:{
        marginVertical: 20,
    },

// END


// CREATE FOOD SECTIONS STYLE
    rowDirection:{
        flexDirection:"row",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    sectionTitle:{
        fontWeight: "bold",
        fontSize: 15,
    },
// END


// CREATE RECIPE STYLE
    pressableAddFoodsToRecipe:{
        backgroundColor: "white",
        height: 45,
        marginBottom: mobileWindow.height*0.03,
        marginTop: mobileWindow.height*0.023,
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
    },
    selectItemsLabel:{
        fontSize: 15,
        color: "grey",
        paddingHorizontal: 7,
    },
    label:{
        fontSize: 15,
        marginBottom: 5,
    },
    selectedContainer:{
        backgroundColor: "#4E8E4D",
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        marginStart: 10,
    },
    qtdHelpContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginEnd: mobileWindow.width*0.10,
        marginBottom: 15,
        marginTop: 5,
    },
    qtdLabel:{
        marginEnd: 4,
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        alignSelf: "center",
    },
    iconPressable:{
        backgroundColor: "white",
        borderRadius: 15,
        padding: 3,
        elevation: 5,
    },
    iconLabel:{
        fontWeight: "bold"
    },
    // END

    // DIARY CREATE 

    turnIconsContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: mobileWindow.height*0.055,
    },

    turnIconLabel:{
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 7,
        textAlign: "center",
    },
    turnIconLabelSelected:{
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 7,
        textAlign: "center",
        backgroundColor: "#4E8E4D",
        color: "white"
    },

    // NUTRITION DIARY 
    pressableTypeofSnack:{
        backgroundColor: "white",
        height: 45,
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
    },



})

export default formCreateStyle;