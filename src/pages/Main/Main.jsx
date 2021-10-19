import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, SearchList } from '../../components';
import { fetchSearch } from '../../redux/actions';
import StyledMain from './Main.styled';

export default function Main() {
  const query = useSelector((store) => store.searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.text) {
      const queryText = query.text.split(' ').join('%20');
      dispatch(fetchSearch(queryText, query.entitie));
    }
  }, [query]);

  return (
    <StyledMain>
      <h1>Main</h1>
      <SearchForm />
      {query.text && <SearchList />}
    </StyledMain>
  );
}
