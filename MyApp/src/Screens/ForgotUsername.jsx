import emailjs from "@emailjs/browser";
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
import { PlayerContext } from "../Context/PlayerContext";
export default function ForgotUsername() {
  // const [username, setUsername] = useState("");
  // const { player, GetByEmail, sendNewUsername } = useContext(PlayerContext);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

 
    const CheckIfExists = async () => {
      let user = await GetByEmail(email);
      if (!user) {
        Alert.alert("oh no!", "email not found :(");
        return;
      }
      if (user.email) {
        let res = await sendNewUsername(user._id, user.email);
        if (res == true) {
          Alert.alert(
            "We Found You",
            "we sent an email to your address to reset the username"
          );
        } else Alert.alert("error", "Something Went Wrong");
      }
    };
    const EMAILJS_PUBLIC_KEY ="yVLhGWDVAc-Nm6xSY";
    const sendEmail = () => {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Define the email data (replace with your service and template IDs)
      const emailData = {
        service_id: "service_u1qhosa",
        template_id: "template_9p1f9h3",
        user_id: EMAILJS_PUBLIC_KEY, // User ID can be the same as your public key
        template_params: {
          to_email: recipientEmail, // Replace with the recipient's email address
          subject: "Hello from EmailJS",
          message: "This is a test email sent from EmailJS in React Native!",
        },
      };
      // Send the email
      emailjs
        .sendForm(
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

      <View style={styles.container} >
        <Text style={styles.text}>Email Sender</Text>
        <TextInput
          placeholder="Recipient's Email Address"
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
  };

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

