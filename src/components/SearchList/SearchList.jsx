import React from 'react';
import { useSelector } from 'react-redux';
import ArtistCard from '../ArtistCard/ArtistCard';
import ReleaseCard from '../ReleaseCard/ReleaseCard';

export default function SearchList() {
  const searchData = useSelector((store) => store.searchData);

  if (searchData.isLoading) {
    return (<span>loading...</span>);
  }

  return (
    <>
      {
        searchData.data.count && (
          <ol>
            {searchData.data.artists ? (
              searchData.data.artists.map((art) => <ArtistCard key={art.id} artist={art} />)
            ) : (
              searchData.data['release-groups'].map((rel) => <ReleaseCard key={rel.id} release={rel} />)
            )}
          </ol>
        )
      }
    </>
  );
}
