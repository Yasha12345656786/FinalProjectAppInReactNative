
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Screens/Home'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Home" component={Home} options={{tabBarLabel:'Home',tabBarIcon:()=>(<MaterialCommunityIcons name="home" size={35} color="black"/>)}}/>
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
