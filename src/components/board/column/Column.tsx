import React, {ReactElement, useState} from 'react';
import {PlayerType} from '../../../globals';
import Token from '../token/Token';

import {ColumnProps} from './types';
import './style.scss';

const Column = (props: ColumnProps): ReactElement => {
  const [hovered, setHovered] = useState<boolean>(false);

  const tokenToColour = (token: PlayerType) => {
    switch (token) {
    case PlayerType.PlayerOne:
      return props.gameConfig.playerOneColour;
    case PlayerType.PlayerTwo:
      return props.gameConfig.playerTwoColour;
    default:
      return undefined;
    }
  };

  const full = props.tokens.length >= props.gameState.boardHeight;
  const showPhantom = hovered && !full;

  return (
    <div className={`column ${!full ? 'clickable' : ''}`} 
      onClick={!full ? props.onClick : undefined}
      onMouseEnter={() => {setHovered(true);}}
      onMouseLeave={() => {setHovered(false);}}
    >
      {
        props.tokens.map((token, tokenIndex: number) =>
          <Token 
            key={`token-${props.index}-${tokenIndex}`} 
            colour={tokenToColour(token)} 
          />
        )
          .concat(
            showPhantom ? 
              [<Token 
                key={`token-phantom`} 
                colour={tokenToColour(props.gameState.currentPlayer)} 
                phantom={true}
              />] : []
          )
          .concat(
            Array(props.gameState.boardHeight - props.tokens.length - (showPhantom ? 1 : 0))
              .fill(undefined)
              .map((_, tokenIndex: number) => (
                <Token 
                  key={`token-${props.index}-${tokenIndex + props.tokens.length}`} 
                />
              ))
          )
          .reverse()
      }
    </div>
  );
};

export default Column;
