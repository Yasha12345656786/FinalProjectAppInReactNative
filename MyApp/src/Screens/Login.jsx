import { View, Text,Image, TextInput, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native'
import React, { useContext } from 'react';
import { PlayerContext } from '../Context/PlayerContext';
import { useNavigation } from '@react-navigation/native';



export default function Login() {
  const navigation = useNavigation();
    const [username, onChangeUserName] =  React.useState('username');
    const [password, onChangePassword] =  React.useState('password');
    const {player,Login} = useContext(PlayerContext);
    const CheckInput= async ()=>{
           let res = await Login(username, password);
           if (res == null) {
            Alert.alert("oops","Player Does Not Exist :( ")
           }
           else{
             navigation.navigate("Menu");
           }
          }
          return (
            <SafeAreaView style={styles.container}>
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Username:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text)=>onChangeUserName(text)}
                    value={username}
                    placeholder="Username" 
                    keyboardType="text"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Password:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text)=>onChangePassword(text)}
                    value={password}
                    placeholder="Password"
                    keyboardType="text"
                    secureTextEntry
                  />
                </View>
        
                <TouchableOpacity style={styles.loginButton} onPress={CheckInput}>
                  <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>
                <View> 
                <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                  <Text>No account?</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>
            </SafeAreaView>
          );
      }
      //TODO chek usename and password w/ data base
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff', 
    borderRadius: 5,
  },
  loginButton: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff', 
    borderRadius: 5,
    marginVertical: 20,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});