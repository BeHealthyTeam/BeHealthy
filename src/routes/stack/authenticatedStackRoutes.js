import { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';

// STACK clicked pages
import Calculate from '../../pages/stack/nutrition/calculate'
import CreateFood from '../../pages/stack/nutrition/createFood'
import CreateRecipe from '../../pages/stack/nutrition/createRecipe';
import CreateClients from '../../pages/stack/clients/createClients';
import NutritionDiary from '../../pages/stack/nutrition/nutritionDiary';

// Root page, as navigator nested a navigator -> TAB pages
import AuthententicatedTabRoutes from "../tab/authenticatedTabRoutes";

export default function AuthenticatedStackRoutes(props){

    const AuthenticatedStack = createStackNavigator();

    async function verifyFirstLogin(){ 
        try{
            const response = await api.get("/users", {
              headers: {'Authorization': token}
            })
            console.log(response.data)
        }catch(e){
            console.log(e.message)
        }
      }

    return(
        <AuthenticatedStack.Navigator>
            <AuthenticatedStack.Screen name="Home" component={AuthententicatedTabRoutes} 
            options={{ headerShown: false, tabBarLabel: 'Root'}}
            />
            <AuthenticatedStack.Screen name="CreateClients" component={CreateClients}
            options={{
                title: "Cadastro de Cliente",
                minHeight: 10,
            }}
            />
            <AuthenticatedStack.Screen name="Calculate" component={Calculate} 
            options={{
                headerStyle: { 
                    minHeight: 10,
                },
                title: "Calcular IMC",
            }}
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
            <AuthenticatedStack.Screen name="NutritionDiary" component={NutritionDiary} 
            options={{ headerStyle: {
                minHeight: 10,
                },
                title: "Diario Nutricional",
            }}
            /> 
      </AuthenticatedStack.Navigator>
    )
}