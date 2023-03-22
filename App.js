import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createContext, useReducer, useMemo, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ROUTES PAGES -> STACK -> TAB is created inside of stack navigators
import AuthententicatedStackRoutes from './src/routes/stack/authenticatedStackRoutes';
import NonAuthenticatedStackRoutes from './src/routes/stack/nonAuthenticatedStackRoutes';
import LoadignScreen from './src/pages/authentication/loadingScreen';

const AuthContext = createContext();

export default function App({ navigation }) {

  // AsyncStorage store and get data.
  const storeData = async (token) => {
    try {
      const jsonValue = JSON.stringify(token)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
    
  }

  const [state, dispatch] = useReducer(
    (prevState, action) => {

      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
        // -> userToken = await getData(); TESTE
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // request no backend com data(login e senha) return token 
        storeData("dummy-auth-token")
        dispatch({ type: 'SIGN_IN', token: await getData() });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // request no backend com data(login e senha) return token 
        storeData("dummy-auth-token") 
        dispatch({ type: 'SIGN_IN', token: await getData() });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
      { 
      state.isLoading ? (
        <LoadignScreen/>
      ) :
      state.userToken != null ? 
          <AuthententicatedStackRoutes
           AuthContext = {AuthContext}
          />
        : 
          <NonAuthenticatedStackRoutes
          AuthContext = {AuthContext}
          />
      }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
