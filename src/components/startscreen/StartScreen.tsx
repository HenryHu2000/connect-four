import React, {FormEvent, ReactElement} from 'react';
import {GameStage, PlayerType} from '../../globals';

import {StartScreenProps} from './types';
import './style.scss';
import UserConfCard from './userconfcard/UserConfCard';

const StartScreen = (props: StartScreenProps): ReactElement => {
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    props.setGameStage(GameStage.Ongoing);
  };

  return (
    <div className='start-screen'>
      <h1>Choose your names and token colours:</h1>
      <form onSubmit={onSubmit}>
        <div className='conf-container'>
          <UserConfCard 
            player={PlayerType.PlayerOne}
            gameConfig={props.gameConfig}
            setGameConfig={props.setGameConfig}
            disabledColour={props.gameConfig.playerTwoColour}
          />
          <UserConfCard 
            player={PlayerType.PlayerTwo}
            gameConfig={props.gameConfig}
            setGameConfig={props.setGameConfig}
            disabledColour={props.gameConfig.playerOneColour}
          />
        </div>
        <input type='submit' value='Start' />
      </form>
    </div>
  );
};

export default StartScreen;
