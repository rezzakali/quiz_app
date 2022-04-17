import { useState } from "react";
import "./App.css";
import EndScreen from "./Components/EndScreen";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginTop: "15px" }}>Quiz App</h1>
      <div className="App shadow-lg">
        <QuizContext.Provider
          value={{ gameState, setGameState, score, setScore }}
        >
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endScreen" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;
