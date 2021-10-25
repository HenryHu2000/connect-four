import React, {ReactElement} from 'react';
import {PlayerType, TokenColour} from '../../../globals';

import {UserConfCardProps} from './types';
import './style.scss';
import Token from '../../board/token/Token';

const UserConfCard = (props: UserConfCardProps): ReactElement => {
  const updateGameConfig = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.setGameConfig(
      {
        ...props.gameConfig,
        [e.target.name]: e.target.value
      }
    );
  };
  const playerOne = props.player === PlayerType.PlayerOne;

  return (
    <div className='user-conf-card'>
      <div className='avatar-wrapper'>
        <Token 
          colour={
            playerOne 
              ? props.gameConfig.playerOneColour 
              : props.gameConfig.playerTwoColour
          }
        />
      </div>
      <label>
        <input type='text' name={playerOne ? 'playerOneName' : 'playerTwoName'}
          value={playerOne ? props.gameConfig.playerOneName : props.gameConfig.playerTwoName}
          onChange={updateGameConfig}
        />
      </label>
      <br />
      {Object.values(TokenColour).map(colour => 
        (
          <label className='radio' key={`radio-${props.player}-${colour}`}>
            <input 
              type='radio' 
              name={playerOne ? 'playerOneColour' : 'playerTwoColour'}
              value={colour} onChange={updateGameConfig}
              checked={
                (playerOne 
                  ? props.gameConfig.playerOneColour 
                  : props.gameConfig.playerTwoColour
                ) === colour
              }
              disabled={colour === props.disabledColour}
            />
            {<Token colour={colour}
              phantom={colour === props.disabledColour}/>}
          </label>
        ))}
    </div>
  );
};

export default UserConfCard;
