import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function ReportForm() {
  const [typeOfError, setTypeOfError] = useState("");
  const [errorLocation, setErrorLocation] = useState();
  const [detailsOfError, setDetailOfError] = useState("");

  return (
    <View>
      <Text>ReportForm</Text>
      <TextInput placeholder="Error Accurred In Trivia/Memory Game or Interface Error ?" />
      <TextInput placeholder="In Which Level Did The Error Accurred ? or Which Interface Has A Problem? For Example: Login/Resgister Screen"  />
      <TextInput
        placeholder="What Type Of Error Accurred? Missing Letters/Images, Level Transiton, Missing Text, Login/SignUp Problems etc."
        ty
      />
      <Button title="Send Report" />
    </View>
  );
}
