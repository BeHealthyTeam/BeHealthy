import { StyleSheet, StatusBar, Dimensions} from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const menuCardStyle = StyleSheet.create({
    
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
    moduleBackground:{
        backgroundColor: "#FFF0BB",
        maxWidth: mobileWindow.width*0.8,
        minWidth: mobileWindow.width*0.8,
        borderWidth: 1,
        borderColor: "#CF6766",
        borderRadius: 15,
        elevation: 5,
    },
    iconContent:{
        justifyContent: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 10,
        paddingHorizontal: 10,
        elevation: 10,
    },
    inconPressable:{
        marginHorizontal: 20,
        marginBottom: 10,
    },
    icon:{
        backgroundColor: "white",
        borderRadius: 100,
        borderWidth: 1,
        paddingStart: 10,
        paddingTop: 5,
        elevation: 5,
    },


    
})

export default menuCardStyle;