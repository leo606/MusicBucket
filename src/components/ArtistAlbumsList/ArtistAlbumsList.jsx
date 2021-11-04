import React from 'react';
import ArtistAlbumsListStyled from './ArtistAlbumsList.styled';
import useAlbumsFilter from '../../hooks/useAlbumsFilter';

function ArtistAlbumsList() {
  const [mainAlbums, compilations, eps] = useAlbumsFilter();

  return (
    <section>
      {
        mainAlbums.length > 0 && (
          <>
            <h4>Main Albums</h4>
            <ArtistAlbumsListStyled>
              {mainAlbums.map((album) => <li>{album.title}</li>)}
            </ArtistAlbumsListStyled>
          </>
        )
      }
      {
        compilations.length > 0 && (
          <>
            <h4>Compilations Albums</h4>
            <ArtistAlbumsListStyled>
              {compilations.map((album) => <li>{album.title}</li>)}
            </ArtistAlbumsListStyled>
          </>
        )
      }
      {
        eps.length > 0 && (
          <>
            <h4>EPs Albums</h4>
            <ArtistAlbumsListStyled>
              {eps.map((album) => <li>{album.title}</li>)}
            </ArtistAlbumsListStyled>
          </>
        )
      }
    </section>

  );
}

export default ArtistAlbumsList;
