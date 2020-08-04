const checkIfGameEnded = gameState => {
  return gameState.every(cellState => cellState !== null);
};

export default checkIfGameEnded;
