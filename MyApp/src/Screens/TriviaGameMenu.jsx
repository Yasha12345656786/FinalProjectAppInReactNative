import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import LogoImage from "../../assets/Images/logo.png";
import { useContext, useEffect } from "react";
import { TriviaContext } from "../Context/TriviaContext";

export default function TriviaGameMenu() {
  const navigation = useNavigation();
  const { endGame, setEndGame } = useContext(TriviaContext);
  useEffect(() => {
    if (endGame) {
      setEndGame(false);
    }
  }, [endGame]);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 200,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={LogoImage} style={{ width: 150, height: 150 }} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Trivia Game</Text>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("TriviaGame")}
        >
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("TriviaGameLeaderBoard")}
        >
          <Text style={styles.buttonText}>Leaderboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  menuItem: {
    marginVertical: 10,
  },
  menuButton: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
