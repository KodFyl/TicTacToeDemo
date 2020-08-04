import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Playboard from "./Playboard";
import Result from "./Result";
import findWinner from "./utils/findWinner";
import checkIfGameEnded from "./utils/checkIfGameEnded";

const GAME_STATUS = {
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETE: "COMPLETE"
};

const initialGameState = Array(9).fill(null);

function App() {
  const [gameState, setGameState] = useState(initialGameState);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.IN_PROGRESS);
  const gameWinner = useRef();

  useEffect(
    function watchForWinner() {
      const winner = findWinner(gameState);
      if (winner) {
        gameWinner.current = winner;
        setGameStatus(GAME_STATUS.COMPLETE);
      } else if (checkIfGameEnded(gameState)) {
        setGameStatus(GAME_STATUS.COMPLETE);
      }
    },
    [gameState]
  );

  function onClickCell(cellIndex, player) {
    const nextGameState = [...gameState];
    nextGameState[cellIndex] = player;
    setGameState(nextGameState);
  }

  function onPlayAgain() {
    gameWinner.current = null;
    setGameState(initialGameState);
    setGameStatus(GAME_STATUS.IN_PROGRESS);
  }

  return gameStatus === GAME_STATUS.IN_PROGRESS ? (
    <Playboard gameState={gameState} onClickCell={onClickCell} />
  ) : gameStatus === GAME_STATUS.COMPLETE ? (
    <Result winner={gameWinner.current} onPlayAgain={onPlayAgain} />
  ) : null;
}

export default App;
