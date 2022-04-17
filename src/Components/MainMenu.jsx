import { Button } from "@mui/material";
import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div>
      <div className="mb-3">
        <h2 className="mt-5">🤔</h2>
        <Button
          variant="contained"
          onClick={() => {
            setGameState("quiz");
          }}
          id="startButton"
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
}

export default MainMenu;
