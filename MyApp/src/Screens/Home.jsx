import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../Component/Logo'

export default function Home() {
  return (
    <View>
        <Logo/>
        <View>
       <TouchableOpacity>
         <Text>LogIn</Text>
       </TouchableOpacity>
       </View>
       <View>
       <TouchableOpacity >
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