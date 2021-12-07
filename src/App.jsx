import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import { Main, ArtistDetails, ReleaseGroupDetails } from './pages';
import theme from './theme/theme';
import { Header } from './components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
  }
`;

export default function App() {
  const themeSelected = useSelector((store) => store.theme);
  return (
    <ThemeProvider theme={theme[themeSelected]}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/artist/:artistId" component={ArtistDetails} />
        <Route exact path="/release-group/:releaseId" component={ReleaseGroupDetails} />
        <Route exact path="/" component={Main} />
      </Switch>
    </ThemeProvider>
  );
}
