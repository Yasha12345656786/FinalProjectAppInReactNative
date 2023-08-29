import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { PlayerContext } from "../Context/PlayerContext";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { player, GetByEmail, SendNewPassword } = useContext(PlayerContext);

  const CheckIfExists = async () => {
    let user = await GetByEmail(email);
    if (!user) {
      Alert.alert("oh no!", "email not found :(");
      return;
    }
    if (user.email) {
      let res = await SendNewPassword(user._id, user.email);
      if (res == true)
        Alert.alert("we found you", "we sent you a new password to your email");
      else
        Alert.alert("error", "something wend wrong");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.description}>
        Enter your email address to reset your password.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity style={styles.resetButton} onPress={CheckIfExists}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  resetButton: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
