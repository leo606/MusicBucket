/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchForm } from './components';
import { addArtist } from './redux/actions';

// 5b11f4ce-a62d-471e-81fc-a69a8278c7da

function App() {
  const [artistId, setArtistId] = useState();
  const dispatch = useDispatch();

  function addArtistId() {
    dispatch(addArtist(artistId));
  }

  return (
    <>
      <h1>App_</h1>
      <SearchForm />
    </>
  );
}

export default App;
