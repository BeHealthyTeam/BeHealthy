import { react, useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';

// AUTHENTICATION PAGES
import Login from '../../pages/authentication/login';
import Register from '../../pages/authentication/register';
import FailRegister from '../../pages/authentication/failRegsiter';
import SucessRegister from '../../pages/authentication/sucessRegister';
import LoadignScreen from "../../pages/authentication/loadingScreen";

export default function NonAuthenticatedStackRoutes(props){
  
    const NonAuthenticatedStack = createStackNavigator();

    return(
      <NonAuthenticatedStack.Navigator>
        <NonAuthenticatedStack.Screen 
          name="Login" component={Login}
          options={{
            title: "Login",
            minHeight: 10,
            headerShown: false,
          }}
          initialParams = {{ 
            AuthContext: props.AuthContext
          }}
        />
        
        <NonAuthenticatedStack.Screen name="Register" component={Register}
          options={{
            title: "Login",
            minHeight: 10,
            headerShown: false,
          }}
        />
        <NonAuthenticatedStack.Screen name="FailRegister" component={FailRegister}
          options={{
            title: "Login",
            minHeight: 10,
            headerShown: false,
          }}
        />
        <NonAuthenticatedStack.Screen name="SucessRegister" component={SucessRegister}
          options={{
            title: "Login",
            minHeight: 10,
            headerShown: false,
          }}
        />
      </NonAuthenticatedStack.Navigator>

    )
}