import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {base_api} from '../../utils/api'

export default function Question(id, question) {
    const [questions, SetQuestion] = useState([]);

    async function LoadQuestion(){
        let res = await fetch(`${base_api}/api/memoryGame/question/:lvl`); 
        let data = await res.json();
        SetQuestion(data);
    }
    async function question(){
            questions.map((questions)=><Text>{question}</Text>)
        
    }

    useEffect(()=>{
        LoadQuestion();
    },[]);
    function 
  return (
    <View>
      <Text>
       
      </Text>
    </View>
  )
}