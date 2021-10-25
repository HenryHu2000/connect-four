import {GameConfig, GameState} from '../../game/types';
import {GameStage} from '../../globals';

export interface EndScreenProps {
    gameState: GameState;
    setGameStage: (stage: GameStage) => void;
    resetGame: () => void;
    gameConfig: GameConfig;
}
