import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const listOptions = StyleSheet.create({

backgroundMenu:{
    backgroundColor: "lightgrey",
    flex: 1,
},
modalMenuContainer:{
    backgroundColor: "green",
    marginTop: statusBarHeight-15,
    marginEnd: statusBarWidth-35,
    backgroundColor: '#007334',
    elevation: 1,
    zIndex: 1,
    flex: 1,
},
modalContentMenu:{
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "column",
    padding: 10,
},
module:{
    backgroundColor: "orange",
    borderRadius: 15,
    marginVertical: 10,
},
moduloTitle:{
    fontSize: 20,
    alignSelf: "center",
},
optionModuleContent:{
    backgroundColor: "white",
    marginHorizontal: 20,
    flexDirection: "row",
    alignContent: "space-between",
    borderRadius: 20,
},
optionsModule:{
    flexDirection: "row",
    alignContent: "space-between",
    padding: 15, 
},
optionIcon:{
    flexDirection: "row",
    backgroundColor: "white",
    padding: 7,
    alignSelf: "center",
},

})

export default listOptions;