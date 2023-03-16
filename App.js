import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

// ROUTES PAGES -> STACK
import AuthententicatedStackRoutes from './src/routes/stack/authenticatedStackRoutes';
import NonAuthenticatedStackRoutes from './src/routes/stack/nonAuthenticatedStackRoutes';

// ROUTES PAGES -> TOPTAB
import AuthententicatedTabRoutes from './src/routes/tab/authenticatedTabRoutes';


function Root() {
  return(
    <AuthententicatedTabRoutes/>
  )
}


export default function App(){

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      { 
      isAuthenticated ? 
          <AuthententicatedStackRoutes
           Root = {Root}
          />
        : 
          <NonAuthenticatedStackRoutes
          />
      }
    </NavigationContainer>

  );
}
