import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TriviaContext } from "../Context/TriviaContext";
import { PlayerContext } from "../Context/PlayerContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GameExitModal from "../Component/GameExitModal";
import { useNavigation } from "@react-navigation/native";
export default function TriviaGame() {
  const navigate = useNavigation();
  const {
    question,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    GetNextQuestion,
    UpdateScore,
    points,
    setPoints,
    id,
    GetQuestion,
    endGame,
    setId,
    selectCorrectAnswer,
    setSelectCorrectAnswer,
  } = useContext(TriviaContext);

  const { player, GetPlayerById } = useContext(PlayerContext);
  const [user, setUser] = useState([]);
  const [showExitModal, setExitModal] = useState(false);
  const [selectedOptionIndex, setSelectdOptionIndex] = useState(null);
console.log(currentQuestionIndex)
  const handleExit = () => {
    UpdateScore(id._id, 0);
    setPoints(0);
    setCurrentQuestionIndex(0);
    setExitModal(false);
    navigate.navigate("TriviaGameMenu");
  };

  const handleContinue = () => {
    setExitModal(false);
  };

  const getData = async () => {
    try {
      const PlayerID = await AsyncStorage.getItem("player");

      setUser(PlayerID);
    } catch (error) {
      console.error(error);
    }
  };
  const currnetQuIndex = Math.floor(Math.random() * question.length);
 
  useEffect(() => {
    
    console.log("currnetQuIndex");
    getData();
    setId(player?.player);
    GetQuestion();
    // setId(JSON.parse(PlayerID))
  }, []);

  const currentQuestion = question ? question[currentQuestionIndex] : null;

  const handleOptionSelect = (selecteAnwer) => {
    console.log(selecteAnwer);
    setSelectdOptionIndex(selecteAnwer);
  };
  useEffect(() => {
    if (selectedOptionIndex !== null) {
      handleNextClick();
    }
  }, [selectedOptionIndex]);
  // const AnswerPressed = (answer) => {
  //   if (!answer.correct) {
  //     UpdateScore(player._id, 0);
  //   } else {
  //     UpdateScore(player._id, answer.points);
  //   }
  // };
  const handleNextClick = () => {
    if (!currentQuestion) {
      return;
    }
    // const correctAnswer = currentQuestion.Answers.find((answer) => answer.correct);
    if (selectedOptionIndex !== null) {
      const correctAnswer = currentQuestion.Answers[selectedOptionIndex];
      setSelectCorrectAnswer(selectedOptionIndex);
      //  console.log("correctAnswer",currentQuestion.Answers);
      // console.log("correctQ",correctAnswer.correct);

      if (correctAnswer && correctAnswer.correct) {
        // UpdateScore(id._id, currentQuestion?.points);
        console.log("s", selectedOptionIndex);
        setPoints(points + currentQuestion?.points);
      } else {
        console.log("error");
      }
      setTimeout(() => {
        GetNextQuestion();
        setSelectdOptionIndex(null);
      }, 1500);

      // setSelectdOptionIndex(null);
      
    }
  };
  useEffect(() => {
    console.log(endGame);
    if (endGame) {
      navigate.navigate("TriviaGameMenu");
    }
  }, [endGame]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trivia Game</Text>
        <Text style={styles.scoreText}>Score: {points}</Text>
      </View>

      {currentQuestion ? (
        <View style={styles.questionContainer}>
          <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>{currentQuestion.q}</Text>
          </View>

          <FlatList
            data={currentQuestion.Answers}
            renderItem={({ item, index }) => {
              console.log("selectCorrectAnswer", selectCorrectAnswer);
              return (
                <TouchableOpacity
                  onPress={() => handleOptionSelect(index)}
                  style={[
                    styles.answerButton,
                    selectCorrectAnswer === index &&
                      (item.correct
                        ? styles.correctAnswer
                        : styles.incorrectAnswer),
                  ]}
                >
                  <Text style={styles.answerText}>{item.value}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />

          {/* <TouchableOpacity
          onPress={handleNextClick}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity> */}
        </View>
      ) : (
        <Text style={styles.loadingText}>Loading...</Text>
      )}
      <TouchableOpacity
        onPress={() => setExitModal(true)}
        style={styles.exitButton}
      >
        <Text style={styles.exitButtonText}>Exit Game</Text>
      </TouchableOpacity>

      <GameExitModal
        visible={showExitModal}
        onExit={handleExit}
        onContinue={handleContinue}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scoreText: {
    fontSize: 18,
  },
  questionContainer: {
    flex: 1,
  },
  questionTextContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  answerButton: {
    backgroundColor: "transparent",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,

    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedAnswer: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  correctAnswer: {
    backgroundColor: "#4caf50",
    borderColor: "#4caf50",
  },
  incorrectAnswer: {
    backgroundColor: "red",
    borderColor: "red",
  },
  answerText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
  nextButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  exitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  exitButton: {
    backgroundColor: "red",
    padding: 16,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 10,
  },
  loadingText: {
    fontSize: 18,
  },
});
