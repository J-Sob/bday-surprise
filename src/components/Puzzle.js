import React, { useState, useEffect } from 'react';
import WinDialog from './WinDialog';
import '../css/Puzzle.css';

const Puzzle = () => {
  const size = 3;
  const totalTiles = size * size;
  const emptyTile = totalTiles - 1;

  const [tiles, setTiles] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const [openDialog, setOpenDialog] = useState(false)

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const initialTiles = Array.from({ length: totalTiles }, (_, i) => i);
    setTiles(initialTiles);
    setIsWon(false);
  };

  const solved = () => {
    setIsWon(true);
  };

  const shuffle = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const moveTile = (index) => {
    if (isWon) return;
    const emptyIndex = tiles.indexOf(emptyTile);
    const isValidMove =
      [index - 1, index + 1, index - size, index + size].includes(emptyIndex);

    if (isValidMove) {
      const newTiles = tiles.slice();
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
      setTiles(newTiles);
      checkWin(newTiles);
    }
  };

  const checkWin = (tiles) => {
    const isInOrder = tiles.every((tile, index) => tile === index);
    if (isInOrder) {
      finishGame()
    }
  };

  const finishGame = () => {
    setIsWon(true);
    setTimeout(() => {
      setOpenDialog(true)
    }, 1500);
  }

  return (
    <div className="puzzle-container">
      <div className="puzzle">
        {tiles.map((tile, index) => (
          <div
            key={tile}
            className={`tile ${tile === emptyTile ? 'empty' : ''} ${isWon ? 'won' : ''}`}
            onClick={() => moveTile(index)}
            style={{
              backgroundImage: tile !== emptyTile ? 'url(./puzzle300x300.jpg)' : 'none',
              backgroundPosition: `-${(tile % size) * 100}% -${(Math.floor(tile / size)) * 100}%`
            }}
          >
          </div>
        ))}
      </div>
      <WinDialog isOpen={openDialog} />
      <button className="restart-button" onClick={resetGame}>Restart</button>
      {/* <button className="restart-button" onClick={finishGame}>Solved</button> */}
    </div>
  );
};

export default Puzzle;
