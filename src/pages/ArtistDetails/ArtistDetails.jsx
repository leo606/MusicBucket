import React from 'react';
import { useParams } from 'react-router';
import StyledMainDetais from './ArtistDetails.styled';

export default function ArtistDetails() {
  const { artistId } = useParams();

  return (
    <StyledMainDetais>
      {artistId}
    </StyledMainDetais>
  );
}
