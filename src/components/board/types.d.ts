import {GameConfig, GameState} from '../../game/types';
import {PlayerType} from '../../globals';

export interface BoardProps {
  gameState: GameState;
  gameConfig: GameConfig;
  placeToken: (colIndex: number, token: PlayerType) => void;
}
