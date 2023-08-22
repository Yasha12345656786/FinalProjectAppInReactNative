import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {base_api} from '../../utils/api'

export default function Question(question) {
    const [questions, SetQuestion] = useState([]);

    async function LoadQuestion(){
        let res = await fetch(`${base_api}/api/triviaGame/question/:lvl`); 
        let data = await res.json();
        SetQuestion(data);
    }
    async function question(){
            questions.map((questions)=><Text>{question}</Text>)
        
    }

    useEffect(()=>{
        LoadQuestion();
    },[]); 
  return (
    <View>
      <Text>
       {question()}
      </Text>
    </View>
  )
}