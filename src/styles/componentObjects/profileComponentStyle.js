import { StyleSheet, StatusBar, Dimensions} from "react-native";


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const profileComponentStyle = StyleSheet.create({

    background:{
        flex: 1,
    },
    profileImageContainer:{
        alignSelf: "center",
        marginTop: mobileWindow.height*0.05,
        marginBottom: mobileWindow.height*0.03,
        elevation: 3,
    },
    profileImage:{
        width: (mobileWindow.height*mobileWindow.width)*0.0006,
        height: (mobileWindow.height*mobileWindow.width)*0.0006,
        borderWidth: 2,
        borderRadius: 500,
    },
    profileTitlesContent:{
        flexDirection: "row",
        justifyContent: "center",
    },
    profileTitleLabel:{
        fontSize: 15,
        fontWeight: "bold"
    },
    textContainer:{
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#CF6766",
        marginVertical: mobileWindow.height*0.05,
        marginHorizontal: mobileWindow.width*0.15,
        elevation: 3,
    },
    textContent:{
        marginBottom: 10,
        marginStart: 10,
        flexDirection: "column",
    },
    textColumnTitle:{
        flexDirection: "column",
    },
    labelTitle:{
        fontSize: 15,
        marginVertical: 5,
        fontWeight: "bold",
    },
    textRow:{
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    textColumnData:{
        flexDirection: "column",
        marginStart: 10,
        flex: 1,
    },
    labelData:{
        fontSize: 15,
        marginVertical: 5,
        flex: 1,
    },
    buttons:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    editIcon:{
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        borderRadius: 50,
        elevation: 10,        
        paddingStart: 12,
        paddingTop: 10,
        paddingBottom: 7,
        paddingEnd: 7,    },
    logOutIcon:{
        backgroundColor: "white",
        paddingStart: 12,
        paddingTop: 10,
        paddingBottom: 7,
        paddingEnd: 7,
        borderWidth: 1,
        borderRadius: 50,
        elevation: 10,
        marginStart: 30,
    },

})

export default profileComponentStyle;