import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// const ROOT_URL = "https://musicbrainz.org/ws/2/artist/";
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
      <h1>MF</h1>
      <h2>m</h2>
      <input type="text" name="artistId" onChange={({ target }) => setArtistId(target.value)} />
      <input type="button" value="SET" onClick={addArtistId} />
    </>
  );
}

export default App;
