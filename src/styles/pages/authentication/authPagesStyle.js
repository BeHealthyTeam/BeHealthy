import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const authPagesStyle = StyleSheet.create({
    
    container:{
        backgroundColor: "#FFF0BB",
        borderWidth: 1,
        borderColor: "#CF6766",
        borderRadius: 10,
        marginHorizontal: mobileWindow.width*0.1,
        marginVertical: mobileWindow.height*0.02,
        paddingBottom: mobileWindow.height*0.03,
        elevation: 3,
    },
    inputText:{
        height: 45,
        width: "90%",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        marginTop: mobileWindow.height*0.03,
        paddingStart: 7,
        elevation: 3,
        color: "black",
    },
    viewRegisterLabels:{
        color: "black",
        alignSelf:"flex-end",
        flexDirection: "row",
        paddingEnd: mobileWindow.width*0.12,
        marginTop: -mobileWindow.height*0.01,
        fontWeight: "bold",
        fontSize: 15,
    },
    registerLabel:{
        color: "black",
        alignSelf:"flex-end",
        fontSize: 13,
    },
    registerLabelLink:{
        color: "#CF6766",
        alignSelf:"flex-end",
        fontWeight: "bold",
        fontSize: 15,
    },
    quickAcessLabel:{
        color: "black",
        fontSize: 13,
        alignSelf:"flex-start",
        marginStart: mobileWindow.width*0.1,
        marginTop: mobileWindow.height*0.03,
    },
    quickAccessContainer:{
        backgroundColor: "#FFF0BB",
        borderWidth: 1,
        borderColor: "#CF6766",
        borderRadius: 10,
        marginHorizontal: mobileWindow.width*0.1,
        marginBottom: mobileWindow.height*0.08,
        marginTop: mobileWindow.height*0.005,
        elevation: 3,
    },
    quickAccessIconsContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    quickAccessIcons:{
    },
    pressableText:{
        backgroundColor: "#4E8E4D",
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: "center",
        alignContent: "center",
        maxWidth: mobileWindow.width*0.5,
        minWidth: mobileWindow.width*0.4,
        minHeight: mobileWindow.height*0.06,
        maxHeight: mobileWindow.height*0.08,
        paddingTop: 5,
        marginBottom: 15,
    },
    submitText:{
        fontSize: 20,
        alignSelf: "center",
        color: "white",
    },

    // REGISTER
    containerRegister:{
        backgroundColor: "#FFF0BB",
        borderWidth: 1,
        borderColor: "#CF6766",
        borderRadius: 10,
        marginHorizontal: mobileWindow.width*0.1,
        marginTop: mobileWindow.height*0.02,
        marginBottom: mobileWindow.height*0.1,
        paddingBottom: mobileWindow.height*0.03,
        elevation: 3,
    },
    
    // LOADING

    background:{
        backgroundColor: "white",
        marginTop: statusBarHeight*2,
        flex: 1,
    },
    logoBeHealthy:{
        backgroundColor: "white",
        marginTop: mobileWindow.height*0.05,
        height: mobileWindow.height*0.2,
        alignSelf: "center", 
    },
    logo:{
        width: mobileWindow.width*0.9,
        height: mobileWindow.height*0.16,
        marginHorizontal: 10,
    },
    loadingGifContainer:{
        backgroundColor: "white",
        marginTop: mobileWindow.height*0.08,
        height: mobileWindow.height*0.2,
        alignSelf: "center",    
    },
    loadingGif:{
        width: mobileWindow.width*0.3,
        height: mobileWindow.height*0.4,
        marginHorizontal: 10,
    },
    labelBeinghealthy:{
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#CF6766",
        marginTop: mobileWindow.height*0.06,
    },

})

export default authPagesStyle;