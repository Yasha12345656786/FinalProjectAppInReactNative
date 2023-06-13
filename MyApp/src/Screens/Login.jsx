import { View, Text,Image, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function Login() {
    const [username, onChangeUserName] =  React.useState('username');
    const [password, onChangePassword] =  React.useState('password');
    const CheckInput=()=>{
      if (VerPass != password){
        checkIfExists();
      }
      //TODO chek usename and password w/ data base

  return (
    <SafeAreaView>
    <ScrollView>
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

        <TouchableOpacity onPress={CheckInput}>
            <Text>Log In</Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>

 
  )
  
}
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