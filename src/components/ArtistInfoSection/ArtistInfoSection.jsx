import React from 'react';
import { useSelector } from 'react-redux';
import ArtistInfoSectionStyled from './ArtistInfoSection.styled';

function ArtistInfoSection() {
  const { country, lifeSpan, genres } = useSelector(({ artist }) => artist);

  return (
    <ArtistInfoSectionStyled>
      <dl>
        <dt>Country</dt>
        <dd>{country}</dd>
        <dt>Activity</dt>
        <dd>
          {new Date(lifeSpan.begin).getUTCFullYear()}
          {' '}
          -
          {' '}
          {lifeSpan.ended ? new Date(lifeSpan.end).getUTCFullYear() : 'today'}
        </dd>
        <dt>Genres</dt>
        <dd>
          {genres.map(({ name }) => (
            <span>
              {name}
            </span>
          ))}
        </dd>
      </dl>
    </ArtistInfoSectionStyled>
  );
}

export default ArtistInfoSection;
