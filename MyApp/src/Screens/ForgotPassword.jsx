import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'

//TODO: Add email.js
export default function ForgotPassword() {
  return (
    <SafeAreaView>
    <View>
      <Text>Forgot Your Password...</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logoContainer: {
    marginBottom: 20,
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    width: 200,
  },
});