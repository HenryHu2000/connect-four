import React, {ReactElement} from 'react';
import {PlayerType} from '../../globals';
import Column from './column/Column';

import {BoardProps} from './types';
import './style.scss';

const Board = (props: BoardProps): ReactElement => {
  const columns = props.gameState.grid.map((col: PlayerType[], colIndex: number) => (
    <Column
      key={`column-${colIndex}`}
      index={colIndex}
      tokens={col}
      gameState={props.gameState}
      gameConfig={props.gameConfig}
      onClick={() => props.placeToken(colIndex, props.gameState.currentPlayer)}
    />
  ));
  return (
    <div className='board'>
      {columns}
    </div>
  );
};

export default Board;
