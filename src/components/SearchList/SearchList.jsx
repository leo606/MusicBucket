import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchSearch } from '../../redux/actions';

function SearchList() {
  const searchQuery = useSelector(((store) => store.query));
  useEffect(() => {
    const searchQueryText = searchQuery.text.split(' ').join('%20');
    fetchSearch(searchQueryText, searchQuery.entitie);
  }, [searchQuery]);

  return (
    <>
      <h1>Search_List</h1>
    </>
  );
}

export default SearchList;
