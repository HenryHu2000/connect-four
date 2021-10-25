import {GameConfig, GameState} from '../../../game/types';
import {PlayerType} from '../../../globals';

export interface ColumnProps {
  index: number;
  tokens: PlayerType[];
  gameState: GameState;
  gameConfig: GameConfig;
  onClick: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
}
