import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../../redux/actions';

function SearchList() {
  const dispatch = useDispatch();
  const query = useSelector((store) => store.query);
  const { data } = useSelector((store) => store.data);

  useEffect(() => {
    const queryText = query.text.split(' ').join('%20');
    dispatch(fetchSearch(queryText, query.entitie));
  }, [query]);

  return (
    <>
      <h1>Search_List</h1>
      {
        data.count && (
          <ol>
            {data.artists ? (
              data.artists.map((art) => <li key={art.id}>{art.name}</li>)
            ) : (
              data['release-groups'].map((rel) => <li key={rel.id}>{rel.title}</li>)
            )}
          </ol>
        )
      }
      {/* {data.artists && (
        <ol>
          {data.artists.map((art) => <li key={art.id}>{art.name}</li>)}
        </ol>
      )} */}
    </>
  );
}

export default SearchList;
