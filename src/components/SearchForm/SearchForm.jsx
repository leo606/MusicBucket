import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchForm() {
  const [queryIn, setQueryIn] = useState();

  function handleChange({target}) {

  }

  return (
    <form action="">
      <input type="text" name="queryIn" id="search-input" />
      <label htmlFor="album-radio">
        <input type="radio" name="typeRadio" id="album-radio" value="album" />
      </label>
      <label htmlFor="artist-radio">
        <input type="radio" name="typeRadio" id="artist-radio" value="artist" />
      </label>
      <input type="button" value="Search" />
    </form>
  );
}

export default SearchForm;
