import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function SignUp() {
    const[Pname,onChangePname]=React.useState('Private Name');
    const[Lname,onChangeLname]=React.useState('Last Name');
    const[username,onChangeUserName]=React.useState('username');
    const[Email,onChangeEmail]=React.useState('email');
    const[password,onChangePassword]=React.useState('password');
    const[VerPass,onChangeVerPass]=React.useState('verify password');
  return (
   <SafeAreaView>
      <Logo/>
    <View>
        <Text>Private Name:</Text>
        <TextInput
          style={styles.input}
          onChangePname={onChangePname}
          value={Pname}
          placeholder="Private Name"
          keyboardType = 'text'
        />
    </View>
    <View>
    <Text>Last Name:</Text>
        <TextInput
          style={styles.input}
          onChangeLname={onChangeLname}
          value={Lname}
          placeholder="Last Name"
          keyboardType = 'text'
        />
    </View>
    <View>
    <Text>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeusername={onChangeUserName}
          value={username}
          placeholder="username"
          keyboardType = 'text'
        />
    </View>
    <View>
    <Text>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeEmail={onChangeEmail}
          value={Email}
          placeholder="email"
          keyboardType = 'email'
        />
    </View>
    <View>
    <Text>Password:</Text>
        <TextInput
          style={styles.input}
          onChangePassword={onChangePassword}
          value={password}
          placeholder="password"
          keyboardType = 'text'
        />
    </View>
    <View>
    <Text>Verify Password:</Text>
        <TextInput
          style={styles.input}
          onChangePname={onChangeVerPass}
          value={VerPass}
          placeholder="verify password"
          keyboardType = 'text'
        />
    </View>

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