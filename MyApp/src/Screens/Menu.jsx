import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import MemoryGameMenu from "./MemoryGameMenu";
import TriviaGameMenu from "./TriviaGameMenu";
import BeeInfoPage from "./BeeInfoPage";
import UserInfo from "./UserInfo";
import { useNavigation } from "@react-navigation/native";
import {Image} from "react-native";
import LogoImage from "../../assets/Images/logo.png";

export default function Menu({ route }) {
  const navigation = useNavigation();
  const { username } = route.params;
  const [gamerUsername,setgamerUsername]=useState('')

  useEffect(()=>{
    setgamerUsername(username)
  },[route])
  console.log("gamer",gamerUsername);
  return (
    <SafeAreaView style={styles.container}>
            <View style={{ height: 200, marginTop:10, justifyContent:"center",alignItems:"center" }}>
          <Image source={LogoImage} style={{ width: 150, height: 150 }} />
        </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
            navigation.navigate("UserInfo", { username: gamerUsername })
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
