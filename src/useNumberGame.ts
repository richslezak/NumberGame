import { useEffect, useState } from 'react';

type DivIndex = number;
type UseNumberGameArgs = { winningNumber: number; range: number };

export const useNumberGame = ({ winningNumber, range }: UseNumberGameArgs) => {
  const data = [...Array(range + 1).keys()];
  data.shift();
  const [activeNumber, setActiveNumber] = useState<null | DivIndex>(null);

  const [currentWinningNumber, setCurrentwinningNumber] = useState(winningNumber);
  const hasWon = activeNumber === currentWinningNumber;

  useEffect(() => {
    if (hasWon) {
      alert(`You Win! You guessed ${currentWinningNumber}`);
      // setTimeout(() => {
      //   setCurrentwinningNumber(currentWinningNumber - 1);
      // }, 4000);
    }
  }, [hasWon]);

  return {
    data,
    hasWon,
    activeNumber,
    setActiveNumber,
    playAgain: () => {
      setCurrentwinningNumber(currentWinningNumber - 1);
    },
  };
};
