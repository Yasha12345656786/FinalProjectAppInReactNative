import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { Image } from "react-native";
import { PlayerContext } from "../Context/PlayerContext";
import { useNavigation } from "@react-navigation/native";
import { base_api } from "../../utils/api";
import LogoImage from "../../assets/Images/logo.png";
export default function SignUp() {
  const navigation = useNavigation();
  const [first_name, onChangePname] = React.useState("");
  const [last_name, onChangeLname] = React.useState("");
  const [username, onChangeUserName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [VerPass, onChangeVerPass] = React.useState("");
  const triviaScore = 0;
  const memoryScore = 0;
  const { player, Register } = useContext(PlayerContext);
  const CheckInput = () => {
    let validationPassed = true;
    let errorMessage = "";

    if (!/^[A-Za-z]+$/.test(first_name)) {
      errorMessage += "Private Name Isn't Valid\n";
      validationPassed = false;
    }

    if (!/^[A-Za-z]+$/.test(last_name)) {
      errorMessage += "Last Name Isn't Valid\n";
      validationPassed = false;
    }

    if (!/^[A-Za-z][A-Za-z0-9_-]{7,14}$/.test(username)) {
      errorMessage += "Username Isn't Valid\n";
      validationPassed = false;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
      errorMessage += "Email Isn't Valid\n";
      validationPassed = false;
    }

    if (!/^[A-Za-z][A-Za-z0-9_-]{7,14}$/.test(password)) {
      errorMessage += "Password Isn't Valid\n";
      validationPassed = false;
    }

    if (VerPass !== password) {
      errorMessage += "Passwords don't match\n";
      validationPassed = false;
    }

    if (validationPassed) {
      createNewUser();
    } else {
      Alert.alert("Validation Error", errorMessage);
    }
  };


 

  const createNewUser = async () => {
    console.log("username",username);
    try {
      await Register(first_name, last_name, username, email, password);
      navigation.navigate("Login");

    } catch (error) {
      console.log(error);
    }


  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={{ height: 200, marginTop:10, justifyContent:"center",alignItems:"center" }}>
          <Image source={LogoImage} style={{ width: 150, height: 150 }} />
        </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Private Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => onChangePname(txt)}
            value={first_name}
            placeholder="Private Name"
            keyboardType="default"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => onChangeLname(txt)}
            value={last_name}
            placeholder="Last Name"
            keyboardType="default"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => onChangeUserName(txt)}
            value={username}
            placeholder="Username"
            keyboardType="default"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => onChangeEmail(txt)}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => onChangePassword(txt)}
            value={password}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Verify Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => onChangeVerPass(txt)}
            value={VerPass}
            placeholder="Verify Password"
            keyboardType="default"
            secureTextEntry
          />
        </View>
        <View style={styles.signUpButtonContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={CheckInput}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Set the background color
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff", // Set the input field background color
    borderRadius: 5,
  },
  signUpButtonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  signUpButton: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff", // Set the button color
    borderRadius: 5,
    elevation: 3,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
