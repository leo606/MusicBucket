import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuery } from '../../redux/actions';

function SearchForm() {
  const [queryIn, setQueryIn] = useState();
  const [entitieIn, setEntitieIn] = useState();
  const dispatch = useDispatch();

  function handleChangeText({ target }) {
    setQueryIn(target.value);
  }

  function handleChangeRadio({ target }) {
    setEntitieIn(target.value);
  }

  function handleClickSearch() {
    dispatch(addQuery(queryIn, entitieIn));
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
      <label htmlFor="album-radio">
        <input
          type="radio"
          name="typeRadio"
          id="album-radio"
          value="album"
          onChange={handleChangeRadio}
        />
      </label>
      <label htmlFor="artist-radio">
        <input
          type="radio"
          name="typeRadio"
          id="artist-radio"
          value="artist"
          onChange={handleChangeRadio}
        />
      </label>
      <input type="button" value="Search" onClick={handleClickSearch} />
    </form>
  );
}

export default SearchForm;
