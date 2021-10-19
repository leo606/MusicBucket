import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
}
