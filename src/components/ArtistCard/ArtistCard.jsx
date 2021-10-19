import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import CardStyled from '../CommonStyled/Card.styled';

export default function ArtistCard({ artist }) {
  return (
    <CardStyled>
      <Link to={`artist/${artist.id}`}>
        <h3>{artist.name}</h3>
        <h4>{artist.disambiguation}</h4>
        <h5>{artist.country}</h5>
      </Link>
    </CardStyled>
  );
}

ArtistCard.propTypes = {
  artist: shape({
    name: string,
  }).isRequired,
};
