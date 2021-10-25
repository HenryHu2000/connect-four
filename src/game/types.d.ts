import {GameStage, PlayerType, TokenColour} from '../globals';

export interface GameState {
  grid: PlayerType[][];
  boardHeight: number;
  currentPlayer: PlayerType;
  gameStage: GameStage;
  winner?: PlayerType;
}

export interface GameConfig {
  playerOneName: string;
  playerTwoName: string;

  playerOneColour: TokenColour;
  playerTwoColour: TokenColour;
}
