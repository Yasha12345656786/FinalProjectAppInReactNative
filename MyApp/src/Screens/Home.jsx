import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { base_api } from "../../utils/api";
import { useEffect } from "react";
import LogoImage from "../../assets/Images/logo.png";
export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height:600,marginTop:50}}>
        <Image source={LogoImage} style={{ width: 150, height: 150 }} />
      </View>
      <View style={{
        position:"absolute",top:300
      }}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.buttonText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ForgotUsername")}
        >
          <Text style={styles.buttonText}>Forgot Username</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  buttonContainer: {
    marginVertical: 10,
  },
  button: {
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
