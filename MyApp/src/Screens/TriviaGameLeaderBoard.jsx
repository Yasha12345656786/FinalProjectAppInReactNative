import React, {useContext,useState,useEffect} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlayerContext } from '../Context/PlayerContext';
import Leaderboard from 'react-native-leaderboard';


export default function TriviaGameLeaderboard()  {
const {player, GetAll} = useContext(PlayerContext);
const {username} = route.params;


  return (
    <Leaderboard
    sortBy='triviaGameScore' 
        labelBy='username' >
          {
            player.triviaGameScore
          }

    </Leaderboard>
  );
};



const styles = StyleSheet.create({
 
});
