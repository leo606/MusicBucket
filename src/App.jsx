import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import Main from './pages/Main/Main';
import theme from './theme/theme';
import { Header } from './components';

export default function App() {
  const themeSelected = useSelector((store) => store.theme);
  return (
    <ThemeProvider theme={theme[themeSelected]}>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </ThemeProvider>
  );
}
