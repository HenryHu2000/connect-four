import {useState} from 'react';
import {GameStage, PlayerType, WIN_LENGTH} from '../globals';

import {GameState} from './types';

const updateGameStatus = (gameState: GameState, lastPos: { row: number; col: number })
  : GameState => {
  const checkRowLength = (rowOffset: number, colOffset: number): number => {
    let currPos = {...lastPos};
    let rowLength = 0;
    for (; rowLength < WIN_LENGTH - 1; rowLength++) {
      // Skip the position last placed
      currPos = {row: currPos.row += rowOffset, col: currPos.col += colOffset};
      if (gameState.grid[currPos.col] === undefined ||
        gameState.grid[currPos.col][currPos.row] !== gameState.currentPlayer) {
        break;
      }
    }
    return rowLength;
  };

  const isGridFull = (grid: PlayerType[][]): boolean =>
    grid.filter(tokens => tokens.length < gameState.boardHeight).length === 0;

  if (checkRowLength(-1, -1) + 1 + checkRowLength(1, 1) >= WIN_LENGTH ||
    checkRowLength(-1, 0) + 1 + checkRowLength(1, 0) >= WIN_LENGTH ||
    checkRowLength(-1, 1) + 1 + checkRowLength(1, -1) >= WIN_LENGTH ||
    checkRowLength(0, -1) + 1 + checkRowLength(0, 1) >= WIN_LENGTH) {
    return {...gameState, gameStage: GameStage.End, winner: gameState.currentPlayer};
  } else if (isGridFull(gameState.grid)) {
    return {...gameState, gameStage: GameStage.End, winner: undefined}; // A draw
  }
  return gameState;
};

const switchSide = (gameState: GameState): GameState => {
  const getOtherPlayer = (player: PlayerType): PlayerType =>
    (player === PlayerType.PlayerOne) ? PlayerType.PlayerTwo : PlayerType.PlayerOne;
  return {...gameState, currentPlayer: getOtherPlayer(gameState.currentPlayer)};
};

const getInitialState = (boardWidth: number, boardHeight: number) : GameState => ({
  grid: new Array(boardWidth).fill([]),
  boardHeight: boardHeight,
  currentPlayer: PlayerType.PlayerOne, // Player 1 plays first
  gameStage: GameStage.Start,
  winner: undefined
});

const useConnectFour = (boardWidth: number, boardHeight: number)
  : [GameState, 
    (stage: GameStage) => void,
    (colIndex: number, token: PlayerType) => void,
    () => void] => {
  const [gameState, setGameState] 
    = useState<GameState>(getInitialState(boardWidth, boardHeight));

  const setGameStage = (stage: GameStage): void => {
    setGameState(
      {
        ...gameState,
        gameStage: stage
      }
    );
  };

  const placeToken = (colIndex: number, token: PlayerType): void => {
    setGameState(
      switchSide(
        updateGameStatus({
          ...gameState,
          grid: gameState.grid.map((col, index) =>
            index === colIndex ? col.concat(token) : col
          )
        }, {row: gameState.grid[colIndex].length, col: colIndex})
      )
    );
  };

  const resetGame = (): void => {
    setGameState(getInitialState(boardWidth, boardHeight));
  };

  return [gameState, setGameStage, placeToken, resetGame];
};

export default useConnectFour;
