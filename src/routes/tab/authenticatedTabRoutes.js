import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

// TAB main pages
import Profile from '../../pages/tab/profile';
import Feed from '../../pages/tab/feed';
import Menu from '../../pages/tab/menu';
import Contacts from '../../pages/tab/contacts';

// TOP TAB BAR style
import tabBar from '../../styles/tabBar/tabBar';

export default function AuthententicatedTabRoutes({route, navigation}) {
    const Tab = createMaterialTopTabNavigator();
    const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64
    return(
      <Tab.Navigator screenOptions={{ 
        tabBarStyle: {
          marginTop: statusBarHeight, 
          backgroundColor: '#4E8E4D',
          },
          tabBarActiveTintColor: "white",
          tabBarIndicatorStyle: {
            borderBottomColor: 'white', //cor de baixo
            borderBottomWidth: 2,
          },
          tabBarLabelStyle:{
            fontWeight: "bold",
            fontSize: 15,
          },
        }}
        initialRouteName="Feed"
      >
        <Tab.Screen 
        name="Menu" 
        component={Menu} 
        options={{ title: 'Menu'} }/>
  
        <Tab.Screen 
        name="Feed" 
        component={Feed} 
        options={{ title: 'Feed' }}/>
  
        <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ title: 'Perfil' }}
        />
  
        <Tab.Screen 
        name="Contacts"
        component={Contacts}
        options={{ 
          tabBarIcon: () => <Ionicons name={"chatbox-ellipses-outline"} style={tabBar.tabBarIcon} size={20}/>,
          tabBarLabel: () =>  null,
        }}
        />
        
      </Tab.Navigator>
    );
  }
  