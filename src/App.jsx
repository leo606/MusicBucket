import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main/Main';
import theme from './theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </ThemeProvider>
  );
}
