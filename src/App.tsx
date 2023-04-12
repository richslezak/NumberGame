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
        <h1>{hasWon && 'You Win!'}</h1>
        <p className="message">
          {(hasWon && `${activeNumber} is the magic number!`) ||
            (activeNumber != null ? `You clicked ${activeNumber}` : 'Play Game')}
        </p>
        <div className="button-container">
          {hasWon && <button onClick={playAgain}>Play Again</button>}
        </div>
      </div>

      <div className="game-container">
        {data.map((el) => (
          <div
            onClick={() => {
              !hasWon && setActiveNumber(el);
            }}
            key={el}
            className={activeNumber === el ? 'active' : ''}
            style={hasWon ? { cursor: 'default' } : {}}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
