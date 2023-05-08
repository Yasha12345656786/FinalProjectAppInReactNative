import { View, Text,StyleSheet,Image  } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View>
      <Image
         source={require('../../assets/Images/logo.png')}
      />
    </View>
  )
}