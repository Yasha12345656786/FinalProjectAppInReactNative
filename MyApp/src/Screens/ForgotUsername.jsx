import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { PlayerContext } from "../Context/PlayerContext";
export default function ForgotUsername() {
  const [username, setUsername] = useState("");
  const { player, GetByEmail, sendNewUsername } = useContext(PlayerContext);

  const CheckIfExists = async () => {
    let user = await GetByEmail(email);
    if (!user) {
      Alert.alert("oh no!", "email not found :(");
      return;
    }
    if (user.email) {
      let res = await sendNewUsername(user._id, user.email);
      if (res == true) {
        Alert.alert("We Found You", "We Sent You A New Username To Your Email");
      } else Alert.alert("error", "Something Went Wrong");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Username</Text>
      <Text style={styles.description}>
        Enter your email address to recover your username.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#999"
        keyboardType="username"
        autoCapitalize="none"
        onChangeText={(text) => setUsername(text)}
      />
      <TouchableOpacity style={styles.recoverButton} onPress={CheckIfExists}>
        <Text style={styles.recoverButtonText}>Recover Username</Text>
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
  recoverButton: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  recoverButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
