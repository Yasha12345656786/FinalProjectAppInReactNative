
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Screens/Home'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Login from './src/Screens/Login';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Home" component={Home} options={{tabBarLabel:'Home',tabBarIcon:()=>(<MaterialCommunityIcons name="home" size={35} color="black"/>)}}/>
        <Tab.Screen name = "Login" component={Login} options={{tabBarLabel:'Login',tabBarIcon:()=>(<MaterialCommunityIcons name="Login" size={35} color="black"/>)}}/>
        <Tab.Screen name = "SignUp" component={SignUp} options={{tabBarLabel:'SignUp',tabBarIcon:()=>(<MaterialCommunityIcons name="SignUp" size={35} color="black"/>)}}/>
      </Tab.Navigator>

    </NavigationContainer>
  
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
