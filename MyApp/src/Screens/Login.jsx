import { View, Text,Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login() {
    const [username, onChangeUserName] =  React.useState('username');
    const [password, onChangePassword] =  React.useState('password');

  return (
    <SafeAreaView>
        <Logo/>
        <View>
        <Text>Enter Username:</Text>
        <TextInput 
           style={styles.input}
           onChangeText={onChangeUserName}
           value={username}
           placeholder="username"
           keyboardType="text"
           />
        </View>
        <View>
        <Text>Enter Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value ={password}
          placeholder="password"
          keyboardType="text"
          />
        </View>

        <TouchableOpacity>
            <Text>Log In</Text>
        </TouchableOpacity>
    </SafeAreaView>

 
  )
  
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });