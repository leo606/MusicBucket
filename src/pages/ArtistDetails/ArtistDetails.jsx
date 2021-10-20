import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchArtist } from '../../redux/actions';
import StyledMainDetais from './ArtistDetails.styled';

export default function ArtistDetails() {
  const { artistId } = useParams();
  const dispatch = useDispatch();

  function loadArtist() {
    dispatch(fetchArtist(artistId));
  }

  return (
    <StyledMainDetais>
      {artistId}
      <input type="button" value="artist" onClick={loadArtist} />
    </StyledMainDetais>
  );
}
