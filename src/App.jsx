import React from 'react';
import { useSelector } from 'react-redux';
import { SearchForm, SearchList } from './components';

function App() {
  const queryText = useSelector(({ query }) => query.text);
  return (
    <>
      <h1>App_</h1>
      <SearchForm />
      {queryText && <SearchList />}
    </>
  );
}

export default App;
