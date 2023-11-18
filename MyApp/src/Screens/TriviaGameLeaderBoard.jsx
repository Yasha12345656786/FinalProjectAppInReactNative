import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlayerContext } from "../Context/PlayerContext";
import {Image} from "react-native";
import LogoImage from "../../assets/Images/logo.png";

export default function TriviaGameLeaderBoard() {
  const { allPlayer, GetAll } = useContext(PlayerContext);

  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    GetAll();
  }, []);

  useEffect(() => {
  
    const sortedData=allPlayer.slice().sort((a,b)=>b.triviaScore-a.triviaScore);
    setLeaderboardData(sortedData)
     
  
  }, [allPlayer]);


  return (
    <SafeAreaView  style={styles.container}>
          <View style={{ justifyContent:"center",alignItems:"center" }}>
          <Image source={LogoImage} style={{ width: 75, height: 75 }} />
        </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {leaderboardData.map((data, index) => (
          <View  style={styles.leaderboardItem} key={index}>
            <Text  style={styles.usernameText}>{index+1}. {data.username}</Text>
            <Text  style={styles.scoreText}>{data.triviaScore}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Background color of the container
  },
  scrollContent: {
    padding: 16, // Add padding to the content inside the ScrollView
  },
  leaderboardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc", // Separator color
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Username text color
  },
  scoreText: {
    fontSize: 16,
    color: "#666", // Score text color
  },
});
