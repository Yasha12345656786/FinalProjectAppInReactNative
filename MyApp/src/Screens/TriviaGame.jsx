import { View, Text } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TriviaContext } from '../Context/TriviaContext';
import { PlayerContext } from '../Context/PlayerContext';

export default function TriviaGame() {

  const { currentQuestion, UpdateScore } = useContext(TriviaContext);
  const { player } = useContext(PlayerContext);


  const AnswerPressed = (answer) => {
    if(!answer.correct){
      UpdateScore(player._id, 0);
    }
    else{
      UpdateScore(player._id, answer.points)
    }
  }


  return (
    <SafeAreaView>
      <Text>TriviaGame</Text>

      <View>
        <Text>{currentQuestion.lvl}</Text>
        <Text>{player.triviaScore}</Text>
      </View>


      <View>
        <Text>{currentQuestion.q}</Text>
      </View>

      <View>
        {
          currentQuestion.Answers.map((answer, index) => {
            <TouchableOpacity key={index} onPress={() => AnswerPressed(answer)}>
              <Text>
                {answer.value}
              </Text>
            </TouchableOpacity>
          })
        }


      </View>


    </SafeAreaView>
  )
}