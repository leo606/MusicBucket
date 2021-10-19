import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import Main from './pages/Main/Main';
import theme from './theme/theme';

export default function App() {
  const themeSelected = useSelector((store) => store.theme);
  return (
    <ThemeProvider theme={theme[themeSelected]}>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </ThemeProvider>
  );
}
