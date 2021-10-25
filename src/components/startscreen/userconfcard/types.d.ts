import {GameConfig} from '../../../game/types';
import {PlayerType, TokenColour} from '../../../globals';

export interface UserConfCardProps {
    player: PlayerType;
    gameConfig: GameConfig;
    setGameConfig: (config: GameConfig) => void;
    disabledColour?: TokenColour;
}
