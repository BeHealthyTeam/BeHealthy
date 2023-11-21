import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const monthlyReportModalStyle = StyleSheet.create({

    modalBackGround:{
        flex: 1,
        backgroundColor: "grey",
        opacity: 0.8,
    },
    nutritionalContainer:{
        position: "absolute",
        backgroundColor: "white",
        alignSelf:"center",
        borderRadius: 15,
        elevation: 1,
        marginVertical: mobileWindow.height*0.04,
    },
    sectionTitle:{
        fontSize: 20,
        alignSelf: "center",
        fontWeight:"bold",
        marginTop: mobileWindow.height*0.02,
        color: "black"
    },
    cosumedDataContainer:{
        width: mobileWindow.width*0.90,
    },
    dataContainer:{
        marginVertical:mobileWindow.height*0.03,
        flexDirection: "row",
        justifyContent:"space-between",
    },
    displayDataText:{
        flexDirection: "column",
        width: mobileWindow.width*0.6,
        alignItems: "center",
    },
    dataTitles:{
        flexDirection: "column",
        flexWrap: "wrap",
    },
    titleAndValue:{
        flexDirection: "row",
        width: mobileWindow.width*0.6,
        marginHorizontal: mobileWindow.width*0.02,
        justifyContent: "space-between"
    },
    arrowIcon:{
        marginTop: mobileWindow.height*0.3,
        fontSize: 30,
        width: 30,
    },
    leftArrow:{
        elevation: 4,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        height: mobileWindow.height*0.65,
        paddingLeft: mobileWindow.width*0.02,
    },
    rigthArrow:{
        elevation: 4,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: mobileWindow.height*0.65,
        paddingRight: mobileWindow.width*0.02,
    },
    attributeTitle:{
        fontSize: 15,
        fontWeight: "bold",
    },
    graphContainer:{
        width: mobileWindow.width*0.95,
    },
    dateInfoAndHelp:{
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    moreInfosIcon:{
        fontSize: 25,
        fontWeight: "bold",
        paddingStart: mobileWindow.width*0.02,
        color: "#CF6766",
    },
    monthChangerIcon:{
        fontSize: 25,
        fontWeight: "bold",
    },
    dateWithHelp:{
        flexDirection: "row",
        marginHorizontal: -mobileWindow.width*0.15,
    },


})

export default monthlyReportModalStyle;