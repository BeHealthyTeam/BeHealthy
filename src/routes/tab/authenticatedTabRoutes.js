import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';

// TAB main pages
import Profile from '../../pages/tab/profile';
import Feed from '../../pages/tab/feed';
import Menu from '../../pages/tab/menu';
import Contacts from '../../pages/tab/contacts';

// TOP TAB BAR style
import tabBar from '../../styles/tabBar/tabBar';

// Requests components
import api from '../../services/api';
import { Auth } from "aws-amplify";

export default function AuthententicatedTabRoutes({route, navigation}) {
    const Tab = createMaterialTopTabNavigator();
    const [firstLogin, setFirstLogin] = useState("Feed") // Feed == false
    useEffect(() => {
      async function verifyFirstLogin(){ 
          try{
              const response = await api.post("/users", 
              { 
                  "id": Auth.user.attributes.sub,
                  "email": Auth.user.attributes.email,
              },{
                  headers: {
                      "Authorization": Auth.user.signInUserSession.idToken.jwtToken
                  },
              })
              setFirstLogin("Profile")
              
          }catch(e){
            console.log(e)
          }
          console.log(Auth.user.signInUserSession.idToken.jwtToken)
      }
      verifyFirstLogin()
  },[firstLogin])

    return(
          <Tab.Navigator screenOptions={{ 
          tabBarStyle: {
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
          initialRouteName = {firstLogin}
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
  