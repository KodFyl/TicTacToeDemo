import React, { useState } from "react";
import "./Playboard.css";

const Playboard = ({ gameState, onClickCell }) => {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function togglePlayer() {
    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(nextPlayer);
  }

  function handleCellClick(cellIndex) {
    if (gameState[cellIndex]) return;
    onClickCell(cellIndex, currentPlayer);
    togglePlayer();
  }

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <h2>{`Player ${currentPlayer}\`s Turn`}</h2>
      <div className="playboard">
        {gameState.map((cellContent, index) => (
          <Cell onClick={() => handleCellClick(index)}>{cellContent}</Cell>
        ))}
      </div>
    </div>
  );
};

const Cell = ({ onClick, children }) => (
  <div className="cell" onClick={onClick}>
    {children}
  </div>
);

export default Playboard;
