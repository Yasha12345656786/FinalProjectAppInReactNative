import { Alert } from "react-native";
import { base_api } from "../../utils/api";
import { createContext, useState, useEffect } from "react";
export const TriviaContext = createContext();
export default function TriviaContextProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentLevel, setCurrentLevel] = useState(0);
  const [question, setQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const [selectCorrectAnswer, setSelectCorrectAnswer] = useState(null);

  const [id, setId] = useState([]);
  const [endGame, setEndGame] = useState(false);

  const GetNextQuestion = () => {
    console.log(question[currentQuestionIndex]?.points || 0);
    if (currentQuestionIndex < question.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectCorrectAnswer(null);
    } else {
      console.log("end ");
      // Handle game completion logic here
      Alert.alert("Game Over!", "Your Trivia Score Has Been Updated", [
        {
          text: "Ok",
          onPress: AlertEndGame,
          style: "default",
        },
      ]);
    }
  };
  const AlertEndGame = () => {
    const totalPoints = points + question[currentQuestionIndex]?.points;
    console.log("end");
    setPoints(totalPoints);
    UpdateScore(id._id, totalPoints);

    setCurrentQuestionIndex(0);
    setPoints(0);

    setQuestion(0);

    setEndGame(true);
  };
  const GetQuestion = async () => {
    try {
      const response = await fetch(`${base_api}/api/triviaGame/`, {
        method: "GET",
      });
      if (response.ok) {
        const text = await response.json();
        setQuestion(text);
      } else {
        console.error(
          "Failed to fetch questions. Status code:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };
  const UpdateScore = async (id, score) => {
    try {
      let response = await fetch(`${base_api}/api/player/AddPoints/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, type: 1, score }),
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setCurrentLevel((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GetQuestion();
  }, []);

  const value = {
    GetNextQuestion,
    currentQuestion,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    question,
    points,
    id,
    endGame,
    setEndGame,
    setId,
    setPoints,
    setQuestion,
    GetQuestion,
    UpdateScore,
    selectCorrectAnswer,
    setSelectCorrectAnswer,
  };

  return (
    <TriviaContext.Provider value={value}>{children}</TriviaContext.Provider>
  );
}
