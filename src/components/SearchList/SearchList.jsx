import React from 'react';
import { useSelector } from 'react-redux';

function SearchList() {
  const searchData = useSelector((store) => store.searchData);

  if (searchData.isLoading) {
    return (<span>loading...</span>);
  }

  return (
    <>
      <h1>Search_List</h1>
      {
        searchData.data.count && (
          <ol>
            {searchData.data.artists ? (
              searchData.data.artists.map((art) => <li key={art.id}>{art.name}</li>)
            ) : (
              searchData.data['release-groups'].map((rel) => <li key={rel.id}>{rel.title}</li>)
            )}
          </ol>
        )
      }
    </>
  );
}

export default SearchList;
