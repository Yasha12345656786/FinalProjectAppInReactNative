import { createContext, useState, useEffect } from 'react';
import { base_api } from '../../utils/api';

export const TriviaContext = createContext();

export default function TriviaContextProvider({ children }) {

    const [currentQuestion, setCurrentQuestion] = useState({});
    const [currentLevel, setCurrentLevel] = useState(0);
    const [currentAnswers, setCurrentAnswers]= useState([])

    const GetNextQuestion = async () => {
        try {
            let response = await fetch(`${base_api}/api/triviaGame/GetNextLevelBylvl/${currentLevel}`);
            if (response.ok) {
                let data = await response.json();
                setCurrentQuestion(data);
            }
        } catch (error) {

        }
    }
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

    const UpdateScore = async (id, score) => {
        try {
            let response = await fetch(`${base_api}/api/player/AddPoints`, {
                method: 'POST',
                headers: {
                    'Context-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    type: 1,
                    score: score
                })
            });
            if (response.ok) {
                setCurrentLevel((prev) => prev + 1);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        GetNextQuestion();
        GetNextAnswers();
    }, [currentLevel])

    const value = {
        currentQuestion,
        currentAnswers,
        UpdateScore
    }

    return (
        <TriviaContext.Provider value={value}>
            {children}
        </TriviaContext.Provider>
    )
}