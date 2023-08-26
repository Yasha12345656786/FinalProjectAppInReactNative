import React, {useContext,useState,useEffect} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlayerContext } from '../Context/PlayerContext';


export default function TriviaGameLeaderboard()  {
const {player} = useContext(PlayerContext);

  return (
    <SafeAreaView>
      <Text>Memory Game Leaderboard</Text>
      <ScrollView>
        {
          player.map((memoryScore)=>{
            <Text> 
                  {player.username}
                  {player.memoryScore}
            </Text>
          })
        }
    </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
 
});
