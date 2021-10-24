import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchArtist } from '../../redux/actions';
import StyledMainDetais from './ArtistDetails.styled';

export default function ArtistDetails() {
  const { artistId } = useParams();
  const artistData = useSelector(({ artist }) => artist);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchArtist(artistId)), []);

  if (artistData.isLoading) return <span>load</span>;

  return (
    <StyledMainDetais>
      <h1>{artistData.name}</h1>
      <h2>{artistData.disambiguation}</h2>

    </StyledMainDetais>
  );
}
