import {GameConfig, GameState} from '../../game/types';
import {GameStage} from '../../globals';

export interface StartScreenProps {
    gameState: GameState;
    gameConfig: GameConfig;
    setGameStage: (stage: GameStage) => void;
    setGameConfig: (config: GameConfig) => void;
}
