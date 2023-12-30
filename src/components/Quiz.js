import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { quizData } from "./quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        if (currentQuestion < quizData.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setTimeLeft(10);
        //   Set timer interval to 10 seconds
        } else {
          setQuizCompleted(true);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentQuestion, timeLeft]);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(10);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setTimeLeft(10);
  };
  // Display questions and answers when the quiz is completed
  const displayAnswers = quizData.map((question, index) => (
    <View key={index}>
      <Text style={styles.question}>
        Question {index + 1}:{quizData[index].question}
      </Text>
      <Text style={styles.correctAnswer}>
        Correct Answer:
        {quizData[index].correctAnswer}
      </Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      {quizCompleted ? (
        <View>
          <Text style={styles.score}>Your Score: {score}</Text>
          <Text style={styles.question}>Questions and Answers:</Text>
          {displayAnswers}
          <TouchableOpacity style={styles.retestButton} onPress={handleRetest}>
            <Text style={styles.buttonText}>Retest</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.question}>
            {quizData[currentQuestion].question}
          </Text>
          <Text style={styles.timer}>Time Left: {timeLeft} sec</Text>
          {quizData[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 5,
    marginBottom: 10,
  },
  option: {
    backgroundColor: "#DDDDDD",
    // backgroundColor:"grey",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    width: 300,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  score: {
    fontSize: 20,
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  retestButton: {
    backgroundColor: "green",
    marginTop: 20,
    padding: 15,
    borderRadius: 26,

    alignItems: "center",
  },
  timer: {
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "green",
    textAlign: "center",
    paddingVertical: 17,
    marginTop: 10,
    marginBottom: 20,   
    borderRadius: 10,
  },
  correctAnswer: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    paddingLeft: 5,
    paddingBottom: 10,
    color: "green",
  },
});
export default Quiz;
