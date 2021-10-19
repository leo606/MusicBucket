import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearchQuery, cleanSearchData, loadingSearchData } from '../../redux/actions';
import StyledSearchForm from './SearchForm.styled';

export default function SearchForm() {
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
    <StyledSearchForm>
      <input
        type="text"
        name="queryIn"
        value={queryIn}
        id="search-input"
        onChange={handleChangeText}
      />
      <div>
        <label htmlFor="artist-radio">
          <input
            type="radio"
            name="entitieRadio"
            id="artist-radio"
            value="artist"
            onChange={handleChangeRadio}
          />
          Artist
        </label>
        <label htmlFor="album-radio">
          <input
            type="radio"
            name="entitieRadio"
            id="album-radio"
            value="release-group"
            onChange={handleChangeRadio}
          />
          Album
        </label>
      </div>
      <input type="button" value="Search" onClick={handleClickSearch} />
    </StyledSearchForm>
  );
}
