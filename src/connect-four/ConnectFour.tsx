import React, {ReactElement, useState} from 'react';
import Board from '../components/board/Board';
import EndScreen from '../components/endscreen/EndScreen';
import {TokenColour, BOARD_HEIGHT, BOARD_WIDTH, GameStage} from '../globals';
import useConnectFour from '../game/useConnectFour';
import StartScreen from '../components/startscreen/StartScreen';
import {GameConfig} from '../game/types';

const App = (): ReactElement => {
  const [gameState, setGameStage, placeToken, resetGame]
    = useConnectFour(BOARD_WIDTH, BOARD_HEIGHT);
  const [gameConfig, setGameConfig] = useState<GameConfig>({
    playerOneName: 'Player 1',
    playerTwoName: 'Player 2',
    playerOneColour: TokenColour.Green,
    playerTwoColour: TokenColour.Purple
  });
  return (
    <div className='App'>
      {
        gameState.gameStage === GameStage.Start
          ? <StartScreen
            gameState={gameState}
            gameConfig={gameConfig}
            setGameStage={setGameStage}
            setGameConfig={setGameConfig}
          />
          : <></>
      }
      {
        gameState.gameStage !== GameStage.Start
          ? <Board
            gameState={gameState}
            gameConfig={gameConfig}
            placeToken={placeToken}
          />
          : <></>
      }
      {
        gameState.gameStage === GameStage.End
          ? <EndScreen
            gameState={gameState}
            setGameStage={setGameStage}
            resetGame={resetGame}
            gameConfig={gameConfig}
          />
          : <></>
      }
    </div>
  );
};

export default App;
