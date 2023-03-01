import { StyleSheet, StatusBar, Dimensions} from "react-native";
import { useFonts, Montserrat_900Black_Italic, Montserrat_200ExtraLight} from "expo-font";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const clientObjectStyle = StyleSheet.create({

container:{
    backgroundColor: '#007334',
    paddingTop: 20,
    marginTop: 10,
    paddingHorizontal: 50,
    elevation: 1,
    zIndex: 1,
    flex: 1,
},
modalContainer:{
    backgroundColor: "green",
    flex: 1,
},

modalTitle:{
    alignContent:"center"
},

modalContent:{
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
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
},

closeModalIcon:{
    backgroundColor: "white",
    alignSelf:"flex-end",
    marginTop: 10,
    marginEnd: 10,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
},
clientImageModal:{
    marginBottom: 30,
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 90,
},

textContent:{
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
    backgroundColor:"#FEFECA",
},

modalTextPrincipalContent:{
    alignSelf: "flex-start",
    marginBottom: 10,
},

modalPrincipalGrid:{
    flexDirection: "row",
    alignSelf:"flex-start",
    marginVertical: 5,
},

modalTextPrincipal:{
    fontSize: 15,
    color: "#936B30",
    paddingHorizontal: 10, 
},
modalTextContentRow:{
    flexDirection:"row",
    justifyContent: "space-around",
    marginEnd: 20,
    marginBottom: 25,
},
modalTextContent:{
    flexDirection:"column",
    justifyContent: "space-between",
    margin: 40,
    marginBottom: 10,
},

modalText:{
    marginTop: 10,
    fontSize: 15,
    color: "black",
},
modalTextIMC:{
    fontSize: 16,
    color: "blue",
    fontStyle: "bold",
    marginBottom: 7,
},
editModalInputPrincipal:{
    width: 225,
    textAlign:"center",
    
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    backgroundColor: 'white',
    color: 'brown'
},

editModalInput:{
    marginTop: 10,
    paddingStart: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    backgroundColor: 'white',
    width: 'auto',
    color: 'red'
},
listClienteButtons:{
    flexDirection: "row",
},
cardButton:{
    paddingHorizontal: 10,
},

clientes:{
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent:"space-between",
    marginTop: 25,
    marginBottom: 20,
    borderRadius: 30,
    paddingHorizontal: 50,
    paddingVertical: 25,
    backgroundColor:"#C3F384",
    
},
clientImage:{
    alignContent:"center",
    marginTop: 7,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 90,
    padding: 5.5,

},

label:{
    alignSelf: "center",
    paddingTop: 10,
},

showMoreButton:{
    alignContent:"center",
    justifyContent: "center",
    paddingTop: 20,
},

changeProfileArrow:{
    position: "absolute",
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignContent:"flex-end",
},

})

export default clientObjectStyle;