import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import useAlbumsFilter from '../../hooks/useAlbumsFilter';
import { fetchArtist, cleanArtisData } from '../../redux/actions';
import StyledMainDetais from './ArtistDetails.styled';

export default function ArtistDetails() {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const artistData = useSelector(({ artist }) => artist);
  const [mainAlbums, compilations, eps] = useAlbumsFilter();

  useEffect(() => {
    dispatch(fetchArtist(artistId));
    return () => dispatch(cleanArtisData());
  }, []);

  if (artistData.isLoading) return <span>load</span>;

  return (
    <StyledMainDetais>
      <h1>{artistData.name}</h1>
      <h2>{artistData.disambiguation}</h2>
      <ul>
        {mainAlbums.map((album) => <li>{album.title}</li>)}
      </ul>
      <hr />
      <ul>
        {compilations.map((album) => <li>{album.title}</li>)}
      </ul>
      <hr />
      <ul>
        {eps.map((album) => <li>{album.title}</li>)}
      </ul>
    </StyledMainDetais>
  );
}
