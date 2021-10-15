import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, SearchList } from './components';
import { fetchSearch } from './redux/actions';

function App() {
  const query = useSelector((store) => store.query);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.text) {
      const queryText = query.text.split(' ').join('%20');
      dispatch(fetchSearch(queryText, query.entitie));
    }
  }, [query]);

  return (
    <>
      <h1>App_</h1>
      <SearchForm />
      {query.text && <SearchList />}
    </>
  );
}

export default App;
