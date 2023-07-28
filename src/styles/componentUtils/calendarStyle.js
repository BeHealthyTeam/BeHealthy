import { StyleSheet, StatusBar, Dimensions} from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const statusBarWidth = StatusBar.currentWidth ? StatusBar.currentWidth : 64

const mobileWindow = Dimensions.get("window");
const Screen = Dimensions.get("screen");

const calendarStyle = StyleSheet.create({
    
    content:{
        marginTop: -10,
        paddingBottom: 10,
        borderRadius: 10,
        flex: 1,
    },
    theme:{
        calendarBackground: 'white',
        textSectionTitleDisabledColor: '#d9e1e8',

        selectedDayTextColor: '#CF6766',
        todayTextColor: '#4E8E4D',
        dayTextColor: 'black',
        textDisabledColor: '#d9e1e8',
        dotColor: 'black',
        selectedDotColor: '#ffffff',
        arrowColor: 'grey',
        disabledArrowColor: 'red',
        monthTextColor: 'black',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '250',
        textDayFontSize: 20,
        textMonthFontSize: 15,
        textDayHeaderFontSize: 15,

        'stylesheet.calendar.header': {
            week: {
                marginTop: 5,
                paddingHorizontal: 10,
                paddingVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                color: "black",
              }
        },
        'stylesheet.day.basic': {
            today: {
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 10,
            },
            todayText: {
                color: '#5390D9',
                fontWeight: '800',
            },
          }
    },

})

export default calendarStyle;