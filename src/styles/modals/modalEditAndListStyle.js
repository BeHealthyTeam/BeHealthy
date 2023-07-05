import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const modalEditAndListStyle = StyleSheet.create({

    // ---------------------> List and Edit modal <-----------------------

    profileImageContainer:{
        alignSelf: "center",
        marginTop: mobileWindow.height*0.01,
        marginBottom: mobileWindow.height*0.03,
        borderWidth: 2,
        borderRadius: 500,
        elevation: 3,
    },
    profileImage:{
        width: (mobileWindow.height*mobileWindow.width)*0.0006,
        height: (mobileWindow.height*mobileWindow.width)*0.0006,
        borderWidth: 2,
        borderRadius: 500,
    },
    formsContent:{
        backgroundColor: "lightyellow",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#CF6766",
        marginVertical: mobileWindow.height*0.05,
        paddingVertical: mobileWindow.height*0.02,
        paddingHorizontal: mobileWindow.width*0.015,
        elevation: 3,
    },
    columnDirectionInputs:{
        flexDirection: "column",
    },
    rowDirectionInputs:{
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        marginHorizontal: mobileWindow.width*0.015,
    },
    textInput:{
        height: 45,
        width: "95%",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        marginTop: mobileWindow.height*0.03,
        paddingStart: 7,
        elevation: 3,
        color: "black",
    },
    textInputShort:{
        height: 45,
        width: mobileWindow.width*0.13,
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        marginTop: mobileWindow.height*0.03,
        paddingHorizontal: 5,
        elevation: 3,
        color: "black",
        
    },
    confirmButton:{
        alignSelf: "center",
        marginBottom: "30%"
    },
    profileTitlesContent:{
        flexDirection: "row",
        justifyContent: "center",
    },
    profileTitleLabel:{
        fontSize: 15,
        fontWeight: "bold",
        height: 45,
        width: "65%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        color: "black",
        textAlign: "center",
        borderStyle: 'dotted',
        paddingTop: mobileWindow.height*0.015,
    },
    fieldsLabel: {
        marginTop: mobileWindow.height*0.01,
        marginBottom: -mobileWindow.height*0.02,
        alignSelf: "center",
    },
    editProfileImagePressable:{
        position: "absolute",
        marginStart: mobileWindow.width*0.5,
        marginTop: mobileWindow.height*0.04,
        backgroundColor: "white",
        borderWidth: 2,
        borderRadius: 50,
    },
    editProfileIcon:{
        padding: 4,
        alignSelf: "center",
        elevation: 10,
    },
    textContent:{
        flexDirection: "column",
    },
    textRow:{
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    textColumnData:{
        flexDirection: "column",
        flex: 1,
    },
    textColumnTitle:{
        flexDirection: "column",
    },
    labelTitle:{
        fontSize: 15,
        marginVertical: 5,
        fontWeight: "bold",
    },
    labelData:{
        fontSize: 15,
        marginVertical: 5,
        flex: 1,
    },
    textRowSmall:{
        flexDirection: "row",
        justifyContent: "space-between",
    },

})

export default modalEditAndListStyle;