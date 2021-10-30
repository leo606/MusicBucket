import React from 'react';
import { useSelector } from 'react-redux';
import ArtistCard from '../ArtistCard/ArtistCard';
import ReleaseCard from '../ReleaseCard/ReleaseCard';
import SearchListStyled from './SearchList.styled';

export default function SearchList() {
  const searchData = useSelector((store) => store.searchData);

  if (searchData.isLoading) {
    return (<span>loading...</span>);
  }

  return (
    <>
      {
        searchData.count && (
          <SearchListStyled>
            {searchData.artists ? (
              searchData.artists.map((art) => <ArtistCard key={art.id} artist={art} />)
            ) : (
              searchData['release-groups'].map((rel) => <ReleaseCard key={rel.id} release={rel} />)
            )}
          </SearchListStyled>
        )
      }
    </>
  );
}
