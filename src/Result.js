import React from "react";
import "./Result.css";

const Result = ({ winner, onPlayAgain }) => {
  const message = winner
    ? `Player ${winner} has won the game`
    : "The game ended in a tie";
  return (
    <div className="result-container">
      <h2>{message}</h2>
      <button className="playagain-btn" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
};

export default Result;
