import React, {ReactElement} from 'react';

import {TokenProps} from './types';
import './style.scss';

const Token = (props: TokenProps): ReactElement => (
  <div className="token-wrapper">
    <div className={`token ${props.colour ? props.colour : ''} ${props.phantom ? 'phantom' : ''}`} />
  </div>
);

export default Token;
