import emailjs from '@emailjs/browser';
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
  // const [email, setEmail] = useState("");
  // const { player, GetByEmail, SendNewPassword } = useContext(PlayerContext);
  // const [emailSent, setEmailSent] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = () => {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Define the email data (replace with your service and template IDs)
    const emailData = {
      service_id: 'YOUR_EMAILJS_SERVICE_ID',
      template_id: 'YOUR_EMAILJS_TEMPLATE_ID',
      user_id: EMAILJS_PUBLIC_KEY, // User ID can be the same as your public key
      template_params: {
        to_email: recipientEmail, // Use the entered email address
        subject: 'Hello from EmailJS',
        message: 'This is a test email sent from EmailJS in React Native!',
      },
    }
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
      else Alert.alert("error", "something wend wrong");
    }
  };
  const EMAILJS_PUBLIC_KEY=' yVLhGWDVAc-Nm6xSY'
  const sendEmail = () => {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Define the email data (replace with your service and template IDs)
    const emailData = {
      service_id: 'service_u1qhosa',
      template_id: 'template_f0lisp1',
      user_id: EMAILJS_PUBLIC_KEY, // User ID can be the same as your public key
      template_params: {
        to_email: 'recipient@example.com', // Replace with the recipient's email address
        subject: 'Hello from EmailJS',
        message: 'This is a test email sent from EmailJS in React Native!',
      },
    };
    // Send the email
    emailjs
      .sendForm(emailData.service_id, emailData.template_id, emailData.template_params)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setEmailSent(true);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setEmailSent(false);
      });
  };
  // const sendForgotPasswordEmail = () => {
  //   emailjs
  //     .send('service_u1qhosa', 'template_f0lisp1', {
  //       to_email: 'recipient@example.com', // Replace with the recipient's email
  //       subject: 'Forgot Password', // Subject
  //       body: 'Please follow the link to reset your password.', // Email body
  //     })
  //     .then((response) => {
  //       console.log('Email sent successfully:', response);
  //     })
  //     .catch((error) => {
  //       console.error('Email sending failed:', error);
  //     });
  // };
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Forgot Password</Text>
    //   <Text style={styles.description}>
    //     Enter your email address to reset your password.
    //   </Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Email"
    //     placeholderTextColor="#999"
    //     keyboardType="email-address"
    //     autoCapitalize="none"
    //     onChangeText={(text) => setEmail(text)}
    //   />
    //   <TouchableOpacity style={styles.resetButton} onPress={sendEmail}>
    //     <Text style={styles.resetButtonText}>Reset Password</Text>
    //   </TouchableOpacity>
    // </View>
    <View>
      <Text>Email Sender</Text>
      <TextInput
        placeholder="Recipient's Email Address"
        value={recipientEmail}
        onChangeText={(text) => setRecipientEmail(text)}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
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
})
}
