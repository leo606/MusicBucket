import React from 'react';
import ArtistAlbumsListStyled from './ArtistAlbumsList.styled';
import useAlbumsFilter from '../../hooks/useAlbumsFilter';

function ArtistAlbumsList() {
  const [mainAlbums, compilations, eps] = useAlbumsFilter();

  return (
    <ArtistAlbumsListStyled>
      {
        mainAlbums.length > 0 && (
          <>
            <h4>Albums</h4>
            <ul>
              {mainAlbums.map((album) => <li key={album.id}>{album.title}</li>)}
            </ul>
          </>
        )
      }
      {
        compilations.length > 0 && (
          <>
            <h4>Compilations Albums</h4>
            <ul>
              {compilations.map((album) => <li key={album.id}>{album.title}</li>)}
            </ul>
          </>
        )
      }
      {
        eps.length > 0 && (
          <>
            <h4>EPs Albums</h4>
            <ul>
              {eps.map((album) => <li key={album.id}>{album.title}</li>)}
            </ul>
          </>
        )
      }
    </ArtistAlbumsListStyled>

  );
}

export default ArtistAlbumsList;
