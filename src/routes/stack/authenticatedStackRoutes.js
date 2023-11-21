import { createStackNavigator } from '@react-navigation/stack';

// STACK clicked pages
import CreateFood from '../../pages/stack/nutrition/createFood'
import CreateRecipe from '../../pages/stack/nutrition/createRecipe';
import Day from '../../pages/stack/user/day';
import ControlCalendar from '../../pages/stack/user/calendar';

// Root page, as navigator nested a navigator -> TAB pages
import AuthententicatedTabRoutes from "../tab/authenticatedTabRoutes";



export default function AuthenticatedStackRoutes(props){

    const AuthenticatedStack = createStackNavigator();

    return(
        <AuthenticatedStack.Navigator>
            <AuthenticatedStack.Screen name="Home" component={AuthententicatedTabRoutes} 
            options={{ headerShown: false, tabBarLabel: 'Root'}}
            />
            <AuthenticatedStack.Screen name="CreateFood" component={CreateFood} 
            options={{ 
                headerStyle: { 
                minHeight: 10,       
                },
                title: "Cadastro de Alimento",  
            }}
            />
            <AuthenticatedStack.Screen name="CreateRecipe" component={CreateRecipe} 
            options={{ headerStyle: {
                minHeight: 10,
                },
                title: "Cadastro de Receita",
            }}
            />
            <AuthenticatedStack.Screen name="Day" component={Day} 
            options={{ headerStyle: {
                minHeight: 10,
                },
                title: "Diário",
            }}
            />
            <AuthenticatedStack.Screen name="ControlCalendar" component={ControlCalendar} 
            options={{ headerStyle: {
                minHeight: 10,
                },
                title: "Calendário",
            }}
            />
      </AuthenticatedStack.Navigator>
    )
}