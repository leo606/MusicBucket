import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import StyledArtistCardLi from './ArtistCard.styled';

export default function ArtistCard({ artist }) {
  return (
    <StyledArtistCardLi>
      <Link to={`artist/${artist.id}`}>
        <h3>{artist.name}</h3>
        <h4>{artist.disambiguation}</h4>
        <h5>{artist.country}</h5>
      </Link>
    </StyledArtistCardLi>
  );
}

ArtistCard.propTypes = {
  artist: shape({
    name: string,
  }).isRequired,
};
