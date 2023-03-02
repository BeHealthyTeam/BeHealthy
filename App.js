import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

// TAB main pages
import Profile from './src/pages/tab/profile';
import Feed from './src/pages/tab/feed';
import Menu from './src/pages/tab/menu';
import Contacts from './src/pages/tab/contacts';

// STACK clicked pages
import Calculate from './src/pages/stack/nutrition/calculate';
import CreateFood from './src/pages/stack/nutrition/createFood';
import CreateRecipe from './src/pages/stack/nutrition/createRecipe';
import CreateClients from './src/pages/stack/clients/createClients';
import NutritionDiary from './src/pages/stack/nutrition/nutritionDiary';

// TOP TAB BAR style
import tabBar from './src/styles/tabBar/tabBar';



const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64

function Root() {
  
  const Tab = createMaterialTopTabNavigator();
    
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
      options={{ title: 'Perfil' }}/>

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


export default function App(){

  const Stack = createStackNavigator();

  return (
    
    <NavigationContainer>

          <Stack.Navigator>
            <Stack.Screen name="Home" component={Root} 
              options={{ headerShown: false, tabBarLabel: 'Root',
              }}
            />
            <Stack.Screen name="CreateClients" component={CreateClients}
              options={{
                title: "Cadastro de Cliente",
                minHeight: 10,
                
              }}
              
            />
            <Stack.Screen name="Calculate" component={Calculate} 
              options={{
                headerStyle: { 
                    minHeight: 10,
                  },
                title: "Calcular IMC",
              }}
            />
            <Stack.Screen name="CreateFood" component={CreateFood} 
              options={{ 
                headerStyle: { 
                  minHeight: 10,       
                },
                title: "Cadastro de Alimento",  
              }}
            />
            <Stack.Screen name="CreateRecipe" component={CreateRecipe} 
              options={{ headerStyle: {
                  minHeight: 10,
                },
                title: "Cadastro de Receita",
              }}
            />
            <Stack.Screen name="NutritionDiary" component={NutritionDiary} 
              options={{ headerStyle: {
                  minHeight: 10,
                },
                title: "Diario Nutricional",
              }}
            />
          </Stack.Navigator>
    </NavigationContainer>

  );
}
