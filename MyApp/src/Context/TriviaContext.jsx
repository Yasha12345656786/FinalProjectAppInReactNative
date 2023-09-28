import { createContext, useState, useEffect } from 'react';
import { base_api } from '../../utils/api';

export const TriviaContext = createContext();

export default function TriviaContextProvider({ children }) {

    const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentLevel, setCurrentLevel] = useState(0);
  const [question, setQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const GetNextQuestion = () => {
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Handle game completion logic here
      alert('Game Over!');
    }
  };
  
    const GetNextAnswers = async () =>{
        try {
            let response = await fetch(`${base_api}/api/triviaGame/GetNextLevelBylvl/${currentLevel}`);
            if (response.ok) {
                let data = await response.json();
                setCurrentAnswers(data);
                
            }
        } catch (error) {
            
            
        }

    }
    const GetQuestion = async () => {
  
        try {
          const response = await fetch("https://finalprojectserver.onrender.com/api/triviaGame/",{
            method: "GET"
          }
      
          );
          if (response.ok) {
            const text = await response.json()
            setQuestion(text)
          } else {
            console.error("Failed to fetch questions. Status code:", response.status);
          }
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
       
      };

      const UpdateScore = async (id, score) => {

        try {
          let response = await fetch("https://finalprojectserver.onrender.com/api/admin/AddPoints/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id,type:1, score }),
         
           
          });
          if (response.ok) {
            let data = await response.json();
            console.log(data);
            setCurrentLevel((prev) => prev+1);
          }
        } catch (error) {
          console.error(error)
        }
      };

      useEffect(() => {
        GetQuestion();
    
      }, []);

      const value = {
        GetNextQuestion,
        currentQuestion,
        currentQuestionIndex,
        question,
        GetQuestion,
        UpdateScore,
        GetNextAnswers
      };

    return (
        <TriviaContext.Provider value={value}>
            {children}
        </TriviaContext.Provider>
    )
}