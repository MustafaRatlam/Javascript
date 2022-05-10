import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactstrap";

import Questions from "./components/Questions";
import "./App.css";

const API_URL =
  "https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuestion, setShowQuestions] = useState(false);
  useEffect(() => {
    Axios.get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };
  return questions.length > 0 ? (
    <div>
      {currentIndex >= questions.length ? (
        <p className="h1 d-flex justify-content-center">
          Your Score is {score}
        </p>
      ) : (
        <Questions handleAnswer={handleAnswer} data={questions[currentIndex]} />
      )}
    </div>
  ) : (
    <div className=" bg-primary "> Loading... </div>
  );
}

export default App;
