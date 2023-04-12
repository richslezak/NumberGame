import { useEffect, useState } from 'react';

type DivIndex = number;
type UseNumberGameArgs = { range: number };

export const useNumberGame = ({ range }: UseNumberGameArgs) => {
  const data = [...Array(range + 1).keys()];
  data.shift();
  const [activeNumber, setActiveNumber] = useState<null | DivIndex>(null);

  const getRandomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const winningNumber = getRandomNumber(1, range);

  const [currentWinningNumber, setCurrentWinningNumber] = useState(winningNumber);
  const hasWon = activeNumber === currentWinningNumber;

  useEffect(() => {
    if (hasWon) {
      // alert(`You Win! You guessed ${currentWinningNumber}`);
      // setTimeout(() => {
      //   setCurrentWinningNumber(currentWinningNumber - 1);
      // }, 4000);
    }
  }, [hasWon]);

  return {
    data,
    hasWon,
    activeNumber,
    setActiveNumber,
    playAgain: () => {
      setCurrentWinningNumber(winningNumber);
      setActiveNumber(null);
    },
  };
};
