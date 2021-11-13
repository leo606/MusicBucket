import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import InfoSectionStyled from './InfoSection.styled';

function InfoSection({ type }) {
  const data = useSelector((state) => state[type]);

  if (type === 'artist') {
    return (
      <InfoSectionStyled>
        <dl>
          <dt>Country</dt>
          <dd>{data.country}</dd>
          <dt>Activity</dt>
          <dd>
            {new Date(data.lifeSpan.begin).getUTCFullYear()}
            {' '}
            -
            {' '}
            {data.lifeSpan.ended ? new Date(data.lifeSpan.end).getUTCFullYear() : 'today'}
          </dd>
          <dt>Genres</dt>
          <dd>
            {data.genres.map(({ name, id }) => (
              <span key={id}>
                {name}
              </span>
            ))}
          </dd>
        </dl>
      </InfoSectionStyled>
    );
  }
  if (type === 'releaseGroup') {
    return (
      <InfoSectionStyled>
        <dl>
          <dt>Type</dt>
          <dd>{data.primaryType}</dd>
          <dt>First Release Date</dt>
          <dd>{data.firstReleaseDate}</dd>
        </dl>
      </InfoSectionStyled>
    );
  }
}

InfoSection.propTypes = {
  type: propTypes.string.isRequired,
};

export default InfoSection;
