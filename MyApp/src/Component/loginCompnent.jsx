import { View, Text } from 'react-native'
import React from 'react'

export default function loginCompnent() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUserName}
          value={username}
          placeholder="Username" 
          keyboardType="text"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          keyboardType="text"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={CheckInput}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  )
}