import emailjs from "@emailjs/browser";
import React, { useCallback, useState } from "react";
import {Image} from "react-native";
import LogoImage from "../../assets/Images/logo.png"; 
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
export default function ForgotPassword() {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  
  const EMAILJS_PUBLIC_KEY = "yVLhGWDVAc-Nm6xSY";
  const sendEmail = () => {
    console.log(recipientEmail)
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const emailData = {
      service_id: "service_u1qhosa",
      template_id: "template_f0lisp1",
      user_id: EMAILJS_PUBLIC_KEY, // User ID can be the same as your public key
      template_params: {
        to_email: recipientEmail, // Replace with the recipient's email address
        subject: "Click The Link Below To Reset Your Password:",
        message: 'https://finalprojectserver.onrender.com/PlayerForgotPassword',
      },
    };
    // Send the email
    emailjs
      .send(
        emailData.service_id,
        emailData.template_id,
        emailData.template_params
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setEmailSent(true);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setEmailSent(false);
      });
  };
  return (
    <View style={styles.container}>
           <View style={{  }}>
          <Image source={LogoImage} style={{ width: 150, height: 150 }} />
        </View>
      <Text style={styles.text}>Your Email:</Text>
      <TextInput
        placeholder="Your Email Address"
        value={recipientEmail}
        onChangeText={(text) => setRecipientEmail(text)}
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Send Email" onPress={sendEmail} disabled={emailSent} />
      {emailSent && <Text>Email sent successfully!</Text>}
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
