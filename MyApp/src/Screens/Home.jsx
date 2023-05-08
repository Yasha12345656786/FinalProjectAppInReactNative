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