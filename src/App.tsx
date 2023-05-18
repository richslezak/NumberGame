import { useState } from 'react';
import { useNumberGame } from './useNumberGame';
import './App.css';

function App() {
  const [rangeNumber, setRangeNumber] = useState(9);

  const { data, hasWon, activeNumber, setActiveNumber, playAgain, count, setCount } = useNumberGame(
    {
      range: rangeNumber,
    }
  );

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setRangeNumber(Number(value));
  };

  let gameWidth: string;
  if (rangeNumber === 4) {
    gameWidth = '200px';
  } else if (rangeNumber === 9) {
    gameWidth = '300px';
  } else {
    gameWidth = '400px';
  }

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>the number game</h1>
          <div className="settings">
            <p>Game Settings</p>
            <select name="rangeNumber" id="rangeNumber" onChange={selectChange}>
              <option value="4">Easy</option>
              <option value="9" selected>
                Default
              </option>
              <option value="16">Hard</option>
            </select>
          </div>
        </div>
      </header>
      <main>
        <h3>How many tries will it take you to guess the winning number?</h3>

        <div className="display">
          <h2>{hasWon && 'You Win!'}</h2>
          <p className="message">
            {(hasWon && `${activeNumber} is the magic number!`) ||
              (activeNumber != null ? `You clicked ${activeNumber}` : 'Play Game')}
          </p>
          <p className="message">
            {hasWon &&
              `It took you ${count} ${count !== 1 ? 'tries' : 'try'} to guess the winning number`}
          </p>
        </div>
        <div className="button-container">
          {hasWon && <button onClick={playAgain}>Play Again</button>}
        </div>

        <div className="game-container" style={{ width: gameWidth }}>
          {data.map((el) => (
            <div
              onClick={(event) => {
                !hasWon
                  ? (setActiveNumber(el), setCount((prev) => prev + 1))
                  : event.preventDefault();
              }}
              key={el}
              className={activeNumber === el ? 'active' : ''}
              style={hasWon ? { cursor: 'default' } : {}}
            >
              {el}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
