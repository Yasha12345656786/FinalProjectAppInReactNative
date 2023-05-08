import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Logo from '../Component/Logo'

export default function ForgotPassword() {
  return (
    //TODO:forgot username or use the same screen but how
    <SafeAreaView>
    <View>
       <Logo/>
    </View>
    <View>
        <Text>Enter Your Email:</Text>
    <TextInput
          style={styles.input}
          onChangeEmail={onChangeEmail}
          value={Email}
          placeholder="email"
          keyboardType = 'email'
        />
    </View>
    </SafeAreaView>
  )
}