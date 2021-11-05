import React from 'react';
import ArtistAlbumsListStyled from './ArtistAlbumsList.styled';
import useAlbumsFilter from '../../hooks/useAlbumsFilter';

function ArtistAlbumsList() {
  const [mainAlbums, compilations, eps] = useAlbumsFilter();

  return (
    <>
      {
        mainAlbums.length > 0 && (
          <>
            <h4>Main Albums</h4>
            <ArtistAlbumsListStyled>
              {mainAlbums.map((album) => <li key={album.id}>{album.title}</li>)}
            </ArtistAlbumsListStyled>
          </>
        )
      }
      {
        compilations.length > 0 && (
          <>
            <h4>Compilations Albums</h4>
            <ArtistAlbumsListStyled>
              {compilations.map((album) => <li key={album.id}>{album.title}</li>)}
            </ArtistAlbumsListStyled>
          </>
        )
      }
      {
        eps.length > 0 && (
          <>
            <h4>EPs Albums</h4>
            <ArtistAlbumsListStyled>
              {eps.map((album) => <li key={album.id}>{album.title}</li>)}
            </ArtistAlbumsListStyled>
          </>
        )
      }
    </>

  );
}

export default ArtistAlbumsList;
