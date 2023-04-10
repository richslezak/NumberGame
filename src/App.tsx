import { useEffect, useState } from 'react';
import './App.css';
import { useNumberGame } from './useNumberGame';

function App() {
  const { data, hasWon, activeNumber, setActiveNumber, playAgain } = useNumberGame({
    winningNumber: 5,
    range: 9,
  });
  return (
    <div className="App">
      <div className="display">
        {activeNumber != null && <span>You clicked {activeNumber}</span>}
        {hasWon && (
          <span>
            You Win! <button onClick={playAgain}>Play Again</button>
          </span>
        )}
      </div>

      <div className="container">
        {data.map((el) => (
          <div
            onClick={() => setActiveNumber(el)}
            key={el}
            className={activeNumber === el ? 'active' : ''}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
