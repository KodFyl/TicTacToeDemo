const WINNER_POSITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const findWinner = gameState => {
  let winner;

  WINNER_POSITIONS.some(position => {
    const [firstItemIndex, secondItemIndex, thirdItemIndex] = position;
    const referenceItem = gameState[firstItemIndex];
    if (
      referenceItem &&
      referenceItem === gameState[secondItemIndex] &&
      referenceItem === gameState[thirdItemIndex]
    ) {
      winner = referenceItem;
      return true;
    }
  });

  return winner;
};

export default findWinner;
