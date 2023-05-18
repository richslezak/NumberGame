import { useState } from 'react';

type DivIndex = number;
type UseNumberGameArgs = { range: number };

export const useNumberGame = ({ range }: UseNumberGameArgs) => {
  const data = [...Array(range + 1).keys()];
  data.shift();

  const [activeNumber, setActiveNumber] = useState<null | DivIndex>(null);
  const [count, setCount] = useState(0);

  const getRandomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const winningNumber = getRandomNumber(1, range);

  const [currentWinningNumber, setCurrentWinningNumber] = useState(winningNumber);
  const hasWon = activeNumber === currentWinningNumber;

  return {
    data,
    hasWon,
    count,
    setCount,
    activeNumber,
    setActiveNumber,
    playAgain: () => {
      setCurrentWinningNumber(winningNumber);
      setActiveNumber(null);
      setCount(0);
    },
  };
};
