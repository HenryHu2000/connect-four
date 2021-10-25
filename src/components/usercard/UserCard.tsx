import React, {ReactElement} from 'react';

import {UserCardProps} from './types';
import './style.scss';

const UserCard = (props: UserCardProps): ReactElement => (
  <div className="user-card">
    <p>UserCard</p>
  </div>
);

export default UserCard;
