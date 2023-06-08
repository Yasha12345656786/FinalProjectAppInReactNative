import { View, Text } from 'react-native'
import React from 'react'

export default function ForgotUsername() {
  return (
    <SafeAreaView>
    <View>
      <Text>Forgot Your Username...</Text>
    </View>
    <View>
        <Text>Enter Your email:</Text>
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