import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, {useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";
import { useNavigation } from '@react-navigation/native';

export default function UserInfo({ route }) {
  const navigation = useNavigation();
  const { player } = useContext(PlayerContext);
  
  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hello {player.player.username}</Text>
      </View>
    <View>
      <View style={styles.userInfoItem}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.info}>{player.player.username}</Text>
      </View>
      <View style={styles.userInfoItem}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{player.player.email}</Text>
      </View>
      <View style={styles.userInfoItem}>
        <Text style={styles.label}>Trivia Score:</Text>
        <Text style={styles.info}>{player.player.triviaScore}</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  greetingContainer: {
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userInfoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  info: {
    fontSize: 16,
  },
  editButton: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
    borderRadius: 5,
    marginVertical: 20,
    elevation: 3,
  },
  logoutButton: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
