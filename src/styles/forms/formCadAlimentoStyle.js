import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const formsCadAlimentoStyle = StyleSheet.create({

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
        marginHorizontal: windowWidth-430,
        marginVertical: 20,
        borderRadius: 20,
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
    descritpionItems:{
        flex: 1,
    },
    itemColumnName:{
        flexDirection: "column",
        flex: 0.99,
        marginEnd: 15,
    },
    itemColumnUnity:{
        flexDirection: "column",
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
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        justifyContent: "center",
    },
    inputPressableField:{
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        backgroundColor: 'white',
    },
    unidadeLabel:{
        fontSize: 15,
        color: "black",
        alignSelf: "center",
        paddingTop: 5,
    },
    nutrientsSections:{
        marginVertical: 20,
    },
    rowDirection:{
        flexDirection:"row",
        alignContent: "center",
        marginVertical: 10,
    },
    sectionTitle:{
        fontWeight: "bold",
        fontSize: 15,
    }

})

export default formsCadAlimentoStyle;