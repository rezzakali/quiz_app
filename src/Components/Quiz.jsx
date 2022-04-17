import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import "../App.css";
import { QuizContext } from "../Helpers/Contexts";
import { question } from "../Helpers/QuestionBank";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [option, setOption] = useState("");

  const { score, setScore, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (question[currentQuestion].answer == option) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const finisQuiz = () => {
    if (question[currentQuestion].answer == option) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div>
      <div className="options">
        <h3 className="m-4"> {question[currentQuestion].prompt}</h3>
        <button
          onClick={() => {
            setOption("A");
          }}
        >
          {question[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setOption("B");
          }}
        >
          {question[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setOption("C");
          }}
        >
          {question[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setOption("D");
          }}
        >
          {question[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion == question.length - 1 ? (
        <Button variant="contained" id="nextButton" onClick={finisQuiz}>
          Finish Quiz
        </Button>
      ) : (
        <Button variant="contained" id="nextButton" onClick={nextQuestion}>
          Next Question
        </Button>
      )}
    </div>
  );
}

export default Quiz;
