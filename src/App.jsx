/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchForm, SearchList } from './components';

// 5b11f4ce-a62d-471e-81fc-a69a8278c7da

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
