import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hello Username...</Text>
      </View>
      <View style={styles.userInfoItem}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.info}>someusername</Text>
      </View>
      <View style={styles.userInfoItem}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>someEmail</Text>
      </View>
      <View style={styles.userInfoItem}>
        <Text style={styles.label}>Password:</Text>
        <Text style={styles.info}>somePassword</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.buttonText}>Edit Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Set the background color
  },
  greetingContainer: {
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    fontSize: 16,
  },
  editButton: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff', // Set the button color
    borderRadius: 5,
    marginVertical: 20,
    elevation: 3, // Add some shadow for a raised effect
  },
  logoutButton: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD', // Set the button color
    borderRadius: 5,
    elevation: 3, // Add some shadow for a raised effect
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
