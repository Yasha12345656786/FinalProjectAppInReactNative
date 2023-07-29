import { View, Text, SafeAreaView,StyleSheet,TextInput, TouchableOpacity,ScrollView  } from 'react-native'
import React from 'react'



export default function SignUp() {
    const[Pname,onChangePname]=React.useState('Private Name');
    const[Lname,onChangeLname]=React.useState('Last Name');
    const[username,onChangeUserName]=React.useState('username');
    const[Email,onChangeEmail]=React.useState('email');
    const[password,onChangePassword]=React.useState('password');
    const[VerPass,onChangeVerPass]=React.useState('verify password');
    const CheckInput=()=>{
      if(/[A-Za-z]/.test(Pname)){
        console.log("Private Name Isn't Valid");
      }
      if(/[A-Za-z]/.test(Lname)){
        console.log("Last Name Isn't Valid");
      }
      if(/^[A-Za-z][A-Za-z0-9_-|w/.]{7,29}$/.test(username)){
        console.log("Username Isn't Valid");
      }
      if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email)){
        console.log("Email Isn't Valid");
      }
      if(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/.test(password)){
        console.log("Password Isn't Valid");

      }
      if (VerPass != password){
        console.log("Passwords don't match")
      }
      
      createNewUser();  
    }
    const createNewUser=()=>{
      let user = {
        Pname,
        Lname,
        username,
        Email,
        password

      }
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Private Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(txt) => onChangePname(txt)}
              value={Pname}
              placeholder="Private Name"
              keyboardType="text"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(txt) => onChangeLname(txt)}
              value={Lname}
              placeholder="Last Name"
              keyboardType="text"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(txt) => onChangeUserName(txt)}
              value={username}
              placeholder="Username"
              keyboardType="text"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(txt) => onChangeEmail(txt)}
              value={Email}
              placeholder="Email"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(txt) => onChangePassword(txt)}
              value={password}
              placeholder="Password"
              keyboardType="text"
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Verify Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(txt) => onChangeVerPass(txt)}
              value={VerPass}
              placeholder="Verify Password"
              keyboardType="text"
              secureTextEntry
            />
          </View>
          <View style={styles.signUpButtonContainer}>
            <TouchableOpacity style={styles.signUpButton} onPress={CheckInput}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0', // Set the background color
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    scrollViewContent: {
      flexGrow: 1,
    },
    inputContainer: {
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
      backgroundColor: '#fff', // Set the input field background color
      borderRadius: 5,
    },
    signUpButtonContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    signUpButton: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#007bff', // Set the button color
      borderRadius: 5,
      elevation: 3,
    },
    signUpButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });