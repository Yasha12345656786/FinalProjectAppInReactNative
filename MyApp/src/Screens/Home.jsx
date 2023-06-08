import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import SignUp from './SignUp';
import Login from './Login';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
       
        <View>
       <TouchableOpacity onPress={()=>navigation.navigate(Login)}>
         <Text>LogIn</Text>
       </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity onPress={()=>navigation.navigate(SignUp)}>
         <Text>SignUp</Text>
       </TouchableOpacity>
       </View>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});