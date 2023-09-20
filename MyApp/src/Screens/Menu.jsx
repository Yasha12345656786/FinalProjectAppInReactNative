import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import MemoryGameMenu from "./MemoryGameMenu";
import TriviaGameMenu from "./TriviaGameMenu";
import BeeInfoPage from "./BeeInfoPage";
import UserInfo from "./UserInfo";
import { useNavigation } from "@react-navigation/native";

export default function Menu({ route }) {
  const navigation = useNavigation();
  const { username } = route.params;
  console.log(username);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("MemoryGameMenu")}
        >
          <Text style={styles.buttonText}>Memory Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("TriviaGameMenu")}
        >
          <Text style={styles.buttonText}>Trivia Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("BeeInfoPage")}
        >
          <Text style={styles.buttonText}>Bee's Info Page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() =>
            navigation.navigate("UserInfo", { username: username })
          }
        >
          <Text style={styles.buttonText}>My Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
    borderRadius: 5,
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 5,
    marginVertical: 20,
    elevation: 3,
  },
  logoutButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
