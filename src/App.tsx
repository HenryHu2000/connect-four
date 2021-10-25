import React, {ReactElement, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';
import {BASENAME} from './globals';

import './App.scss';

const App = (): ReactElement => {
  const Profile = React.lazy(() => import('./profile/Profile'));
  const ConnectFour = React.lazy(() => import('./connect-four/ConnectFour'));
  return (
    <Suspense fallback={<div className='App-spinner-wrapper'><Spinner animation='border'/></div>}>
      <BrowserRouter basename={BASENAME}>
        <Switch>
          <Route path='/connect-four.html' component={ConnectFour}/>
          <Route path='/' component={Profile}/>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
