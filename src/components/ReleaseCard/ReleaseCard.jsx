import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import CardStyled from '../CommonStyled/Card.styled';

export default function ReleaseCard({ release }) {
  return (
    <CardStyled>
      <Link to={`release-group/${release.id}`}>
        <h3>{release.title}</h3>
        <h4>{release['artist-credit'][0].name}</h4>
        <h5>{release['primary-type']}</h5>
        <h5>{release.country}</h5>
        <span>{release.id}</span>
      </Link>
    </CardStyled>

  );
}

ReleaseCard.propTypes = {
  release: shape({
    name: string,
  }).isRequired,
};
