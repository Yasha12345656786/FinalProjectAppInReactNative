import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Menu() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.buttonText}>Memory Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.buttonText}>Trivia Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.buttonText}>Bee's Info Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.buttonText}>My Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Set the background color
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff', // Set the button color
    borderRadius: 5,
    marginVertical: 10,
    elevation: 3, // Add some shadow for a raised effect
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD', // Set the button color
    borderRadius: 5,
    marginVertical: 20,
    elevation: 3, // Add some shadow for a raised effect
  },
  logoutButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
