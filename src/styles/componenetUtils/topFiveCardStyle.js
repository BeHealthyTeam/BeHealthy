import { StyleSheet, StatusBar, Dimensions} from "react-native";


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const topFiveCardStyle = StyleSheet.create({
    
    container:{
        flex: 1,
        marginVertical: 20,
    },
    titleLabel:{
        fontWeight: "bold",
        fontSize: 18,
        elevation: 5,
        marginBottom: mobileWindow.height*0.005,
    },
    content:{
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#CF6766",
        borderRadius: 15,
        width: mobileWindow.width*0.8,
        height: mobileWindow.height*0.23,
        paddingEnd: 5,
        paddingBottom: 5,
    },
    textContent:{
        flex: 1,
        marginTop: mobileWindow.height*0.02,
        marginStart: mobileWindow.width*0.03,
        justifyContent: "flex-start",
    },
    contentLabel:{
        marginBottom: 3,
    },
    seeMoreText:{
        alignSelf: "flex-end",
        color: "black",
        opacity: 0.7,
    },
})

export default topFiveCardStyle;