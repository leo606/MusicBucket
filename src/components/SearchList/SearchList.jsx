/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../../redux/actions';

function SearchList() {
  const dispatch = useDispatch();
  const query = useSelector((store) => store.query);

  useEffect(() => {
    const queryText = query.text.split(' ').join('%20');
    dispatch(fetchSearch(queryText, query.entitie));
  }, [query]);

  return (
    <>
      <h1>Search_List</h1>
      <input type="button" value="ccc" />
    </>
  );
}

export default SearchList;
