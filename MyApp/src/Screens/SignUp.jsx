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
      if (VerPass != password){
        console.log("passwords don't match")
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
   <SafeAreaView>
    <ScrollView>
    
    <View>
        <Text>Private Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(txt)=>onChangePname(txt)}
          value={Pname}
          placeholder="Private Name"
          keyboardType = 'text'
        />
    </View>
    <View>
    <Text>Last Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(txt)=>onChangeLname(txt)}
          value={Lname}
          placeholder="Last Name"
          keyboardType = 'text'
        />
    </View>
    <View>
    <Text>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(txt)=>onChangeUserName(txt)}
          value={username}
          placeholder="username"
          keyboardType = 'text'
        />
    </View>
    <View>
    <Text>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(txt)=>onChangeEmail(txt)}
          value={Email}
          placeholder="email"
          keyboardType = 'email'
        />
    </View>
    <View>
    <Text>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(txt)=>onChangePassword(txt)}
          value={password}
          placeholder="password"
          keyboardType = 'text'
        />
    </View>
    <View>
    <Text>Verify Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(txt)=>onChangeVerPass(txt)}
          value={VerPass}
          placeholder="verify password"
          keyboardType = 'text'
        />
    </View>
    <View>
      <TouchableOpacity onPress={CheckInput}>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
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