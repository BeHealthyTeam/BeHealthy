import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const modalOrderBy = StyleSheet.create({

    // ---------------------> List and Edit modal <-----------------------
    modalBackGround:{
        backgroundColor: "grey",
        flex: 1,
        opacity: 0.75
    },
    modalOrderByContainer:{
        position: "absolute",
        backgroundColor: "white",
        marginTop: 110,
        marginStart: mobileWindow.width-230,
        marginEnd: mobileWindow.width-375,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    modalTitle:{
        justifyContent:"space-between",
        flexDirection: "row",
    },

    closeDropDown:{
        backgroundColor: "white",
        marginTop: -mobileWindow.height*0.045,
        marginStart: -mobileWindow.height*0.075,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        position:"absolute",
        padding: 5,
        borderRadius: 25,
    },
    textTitle:{
        fontSize: 18,
        marginStart: 20,
        marginTop: 20,
    },

    modalOrderByContent:{
        margin: 20,
        backgroundColor: "#FEFECA",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
    },

    pressableContent:{
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor:"green",
        marginBottom: 10,
    },
    iconFilterText:{
        flexDirection: "row",
        alignContent: "center",
    },

})

export default modalOrderBy;