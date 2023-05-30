import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {useState, useEffect} from 'react';
import { Amplify, Auth, Hub} from 'aws-amplify';
import amplifyConfig from './amplify-config';
import api from './src/services/api';

// ROUTES PAGES -> STACK -> TAB is created inside of stack navigators
import AuthententicatedStackRoutes from './src/routes/stack/authenticatedStackRoutes';
import NonAuthenticatedStackRoutes from './src/routes/stack/nonAuthenticatedStackRoutes';
import LoadingScreen from './src/pages/authentication/loadingScreen';

Amplify.configure(amplifyConfig);

export default function App() {

  const [userState, setUserState] = useState(null);

  async function checkUserState(){
    try{
      const user = await Auth.currentAuthenticatedUser({bypassCache: true}); //bypassCache: true -> para não pegar do cache
      setUserState(user);
    }catch(e){
      setUserState(null);
    }
  }
 

  useEffect(() => {
    const listener = data => {
      if(data.payload.event === 'signIn' || data.payload.event === 'signOut'){
        checkUserState();
      }
    };
    Hub.listen('auth', listener);
  },[])


  return (
      <NavigationContainer>
      {
      userState ? ( 
          <AuthententicatedStackRoutes
          />
      ) : (
          <NonAuthenticatedStackRoutes
          />
      )}
      </NavigationContainer>
  );
}
