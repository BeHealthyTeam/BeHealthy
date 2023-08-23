import { StyleSheet, StatusBar, Dimensions} from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const modulesStyle = StyleSheet.create({

    
    moduleBackground:{
        backgroundColor: "#FFF0BB",
        maxWidth: mobileWindow.width*0.8,
        minWidth: mobileWindow.width*0.8,
        borderWidth: 1,
        borderColor: "#CF6766",
        borderRadius: 15,
    },
    iconContent:{
        justifyContent: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingStart: mobileWindow.width*0.03,
        paddingVertical: mobileWindow.height*0.005,
    },
    iconPressable:{
        marginHorizontal: 25,
        marginBottom: 10,
        justifyContent: "center",
        alignSelf: "center",
    },
    icon:{
        width: 40,
        height: 40,
        fontSize: 40,
    },

})

export default modulesStyle;