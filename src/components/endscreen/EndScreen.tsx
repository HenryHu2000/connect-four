import React, {FormEvent, ReactElement} from 'react';
import {GameStage, PlayerType} from '../../globals';

import {EndScreenProps} from './types';
import './style.scss';

const EndScreen = (props: EndScreenProps): ReactElement => {
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    props.setGameStage(GameStage.Start);
    props.resetGame();
  };

  let message = '';
  if (props.gameState.winner !== undefined) {
    message = `${
      props.gameState.winner === PlayerType.PlayerOne 
        ? props.gameConfig.playerOneName 
        : props.gameConfig.playerTwoName 
    } wins!`;
  } else {
    message = 'Draw!';
  }
  return (
    <div className='end-screen'>
      <h1 className='end-message'>{message}</h1>
      <form onSubmit={onSubmit}>
        <input type='submit' value='Rematch' />
      </form>
    </div>
  );
};

export default EndScreen;
