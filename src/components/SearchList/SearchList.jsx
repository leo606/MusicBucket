import React from 'react';
import { useSelector } from 'react-redux';

function SearchList() {
  const data = useSelector((store) => store.data.data);

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
    </>
  );
}

export default SearchList;
