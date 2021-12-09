import React from 'react';
import { useSelector } from 'react-redux';
import ArtistCard from '../ArtistCard/ArtistCard';
import { Loading } from '..';
import ReleaseCard from '../ReleaseCard/ReleaseCard';
import SearchListStyled from './SearchList.styled';

export default function SearchList() {
  const searchData = useSelector((store) => store.searchData);

  if (searchData.isLoading) return <Loading />;

  if (searchData.count <= 0) {
    return (<span>not found</span>);
  }

  return (
    <>
      {
        searchData.count > 0 && (
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
