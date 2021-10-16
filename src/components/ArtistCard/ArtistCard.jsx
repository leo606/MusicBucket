import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

export default function ArtistCard({ artist }) {
  return (
    <li>
      <Link to={`artist/${artist.id}`}>
        <h3>{artist.name}</h3>
        <h4>{artist.disambiguation}</h4>
        <h5>{artist.country}</h5>
        <span>{artist.id}</span>
      </Link>
    </li>
  );
}

ArtistCard.propTypes = {
  artist: shape({
    name: string,
  }).isRequired,
};
