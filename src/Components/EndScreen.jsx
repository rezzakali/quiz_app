import { Button } from "@mui/material";
import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { question } from "../Helpers/QuestionBank";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setGameState("quiz");
  };
  const mainMenu = () => {
    setGameState("menu");
  };
  return (
    <div>
      <h1 className="m-5">Quiz Finished</h1>
      {"🏆"}
      <h3 className="m-3">
        Your Score : {score}/{question.length}
      </h3>
      <Button variant="contained" className="m-4" onClick={mainMenu}>
        Main Menu
      </Button>
      <Button variant="contained" className="m-4" onClick={restartQuiz}>
        Restart
      </Button>
      <div className="mt-5">
        <h2>{score > 2 ? "👍Nice Practise🎁" : "🤔"}</h2>
      </div>
    </div>
  );
}

export default EndScreen;
