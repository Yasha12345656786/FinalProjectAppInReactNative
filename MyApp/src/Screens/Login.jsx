import { View, Text,Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login() {
    const [username, onChangeUserName] =  React.useState('username');
    const [password, onChangePassword] =  React.useState('password');

  return (
    //TODO:forgot password and forgo username
    <SafeAreaView>
        <Logo/>
        <View>
        <Text>Username:</Text>
        <TextInput 
           style={styles.input}
           onChangeText={onChangeUserName}
           value={username}
           placeholder="username"
           keyboardType="text"
           />
        </View>
        <View>
        <Text>Password:</Text>
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
      backgroundColor:'blue'
    },
    backg:{
      backgroundColor:'#fcba03'
    }
  });