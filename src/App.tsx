import { useEffect, useState } from 'react';
import './App.css';
import { useNumberGame } from './useNumberGame';

function App() {
  const { data, hasWon, activeNumber, setActiveNumber, playAgain } = useNumberGame({
    range: 9,
  });
  return (
    <div className="App">
      <div className="display">
        {hasWon || (activeNumber != null && <span>You clicked {activeNumber}</span>)}
        {hasWon && (
          <div>
            <h1>You Win!</h1>
            <p>{activeNumber} is the magic number</p>
            <button onClick={playAgain}>Play Again</button>
          </div>
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
