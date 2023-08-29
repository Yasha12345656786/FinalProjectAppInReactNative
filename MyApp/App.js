
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screens/Home'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Menu from './src/Screens/Menu';
import TriviaGame from './src/Screens/TriviaGame';
import PlayerContextProvider from './src/Context/PlayerContext';
import TriviaContextProvider from './src/Context/TriviaContext';
import ForgotPassword from './src/Screens/ForgotPassword';
import ForgotUsername from './src/Screens/ForgotUsername';

const Stack = createStackNavigator();



const MainMenu = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeMenu} options={{ tabBarLabel: 'Home', tabBarIcon: () => (<MaterialCommunityIcons name="home" size={35} color="black" />) }} />
        <Tab.Screen name="Login" component={Login} options={{ tabBarLabel: 'Login', tabBarIcon: () => (<MaterialCommunityIcons name="Login" size={35} color="black" />) }} />
        <Tab.Screen name="SignUp" component={SignUp} options={{ tabBarLabel: 'SignUp', tabBarIcon: () => (<MaterialCommunityIcons name="SignUp" size={35} color="black" />) }} />
        <Tab.Screen name="Menu" component={Menu} options={{ tabBarLabel: 'Menu', tabBarIcon: () => (<MaterialCommunityIcons name="Menu" size={35} color="black" />) }} />
        <Tab.Screen name="Trivia" component={TriviaGame} options={{ tabBarLabel: 'Question', tabBarIcon: () => (<MaterialCommunityIcons name="Question" size={35} color="black" />) }} />
      </Tab.Navigator> */}
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      <Stack.Screen name="ForgotUsername" component={ForgotUsername}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="Trivia" component={TriviaGame}/>
      <Stack.Screen name="Menu" component={Menu}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}


export default function App() {
  return (

    <>
      <PlayerContextProvider>
        <TriviaContextProvider>
          <MainMenu />
        </TriviaContextProvider>
      </PlayerContextProvider>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
