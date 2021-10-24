import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchArtist } from '../../redux/actions';
import StyledMainDetais from './ArtistDetails.styled';

export default function ArtistDetails() {
  const { artistId } = useParams();
  const artistData = useSelector(({ artist }) => artist);
  const dispatch = useDispatch();

  function loadArtist() {
    dispatch(fetchArtist(artistId));
  }

  return (
    <StyledMainDetais>
      {artistData.isLoading
        ? <span>load</span>
        : <span>{artistData['sort-name']}</span> }
      <input type="button" value="click" onClick={loadArtist} />
    </StyledMainDetais>
  );
}
