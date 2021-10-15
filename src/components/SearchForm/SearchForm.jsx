import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearchQuery, cleanSearchData, loadingSearchData } from '../../redux/actions';

function SearchForm() {
  const [queryIn, setQueryIn] = useState('');
  const [entitieIn, setEntitieIn] = useState('artist');
  const dispatch = useDispatch();

  function handleChangeText({ target }) {
    setQueryIn(target.value);
  }

  function handleChangeRadio({ target }) {
    setEntitieIn(target.value);
  }

  function handleClickSearch() {
    if (!queryIn) dispatch(cleanSearchData());
    dispatch(loadingSearchData(true));
    dispatch(addSearchQuery(queryIn, entitieIn));
  }

  return (
    <form action="">
      <input
        type="text"
        name="queryIn"
        value={queryIn}
        id="search-input"
        onChange={handleChangeText}
      />
      <label htmlFor="artist-radio">
        Artist
        <input
          type="radio"
          name="entitieRadio"
          id="artist-radio"
          value="artist"
          onChange={handleChangeRadio}
        />
      </label>
      <label htmlFor="album-radio">
        Album
        <input
          type="radio"
          name="entitieRadio"
          id="album-radio"
          value="release-group"
          onChange={handleChangeRadio}
        />
      </label>
      <input type="button" value="Search" onClick={handleClickSearch} />
    </form>
  );
}

export default SearchForm;
