import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ForgotUsername from './ForgotUsername';
import MemoryGameLeaderboard from './MemoryGameLeaderBoard';
import MemoryGameMenu from './MemoryGameMenu';
import Menu from './Menu';
import TriviaGameLeaderboard from './TriviaGameLeaderBoard';
import TriviaGameMenu from './TriviaGameMenu';
import UserInfo from './UserInfo';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(Login)}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(SignUp)}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(ForgotPassword)}
        >
          <Text style={styles.buttonText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(ForgotUsername)}
        >
          <Text style={styles.buttonText}>Forgot Username</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(MemoryGameLeaderboard)}
        >
          <Text style={styles.buttonText}>Memory Game Leaderboard</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(MemoryGameMenu)}
        >
          <Text style={styles.buttonText}>Memory Game Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(Menu)}
        >
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(SignUp)}
        >
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(TriviaGameLeaderboard)}
        >
          <Text style={styles.buttonText}>Trivia Game Leaderboard</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(TriviaGameMenu)}
        >
          <Text style={styles.buttonText}>Trivia Game Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(UserInfo)}
        >
          <Text style={styles.buttonText}>User's Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff', 
    borderRadius: 5,
    elevation: 3, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
