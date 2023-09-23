import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function ReportForm() {
  const [typeOfGame, setTypeOfGame] = useState("");
  const [levelNumber, setLevelNumber] = useState();
  const [typeOfError, setTypeOfError] = useState("");

  return (
    <View>
      <Text>ReportForm</Text>
      <TextInput placeholder="Error Accurred In Trivia/Memory Game ?" ty />
      <TextInput placeholder="In Which Level Did The Error Accurred ?" ty />
      <TextInput
        placeholder="What Type Of Error Accurred? Missing Letters/Images, Level Transiton, etc."
        ty
      />
      <Button title="Send Report" />
    </View>
  );
}
