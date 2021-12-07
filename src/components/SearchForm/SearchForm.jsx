import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearchQuery, cleanSearchData, loadingSearchData } from '../../redux/actions';
import StyledSearchFormSection from './SearchForm.styled';

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

  function handleSubmitSearch(e) {
    e.preventDefault();
    if (!queryIn) dispatch(cleanSearchData());
    dispatch(loadingSearchData(true));
    dispatch(addSearchQuery(queryIn, entitieIn));
  }

  return (
    <StyledSearchFormSection>
      <form action="" onSubmit={handleSubmitSearch}>
        <input
          type="text"
          name="queryIn"
          placeholder="Search"
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
        <input type="submit" value="Search" />
      </form>
    </StyledSearchFormSection>
  );
}
