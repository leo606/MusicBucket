import React from 'react';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import DetailsInfoSectionStyled from './DetailsInfoSection.styled';

function DetailsInfoSection({ type }) {
  const data = useSelector((state) => state[type]);

  if (type === 'artist') {
    return (
      <DetailsInfoSectionStyled>
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
      </DetailsInfoSectionStyled>
    );
  }

  if (type === 'releaseGroup') {
    return (
      <DetailsInfoSectionStyled>
        <dl>
          <dt>Type</dt>
          <dd>{data.primaryType}</dd>
          <dt>First Release Date</dt>
          <dd>{data.firstReleaseDate}</dd>
        </dl>
      </DetailsInfoSectionStyled>
    );
  }

  if (type === 'release') {
    return (
      <DetailsInfoSectionStyled>
        <dl>
          <dt>Date</dt>
          <dd>{data.date}</dd>
          <dt>Packaging</dt>
          <dd>{data.packaging}</dd>
          <dt>Country</dt>
          <dd>{data.country}</dd>
          <dt>Quality</dt>
          <dd>{data.quality}</dd>
          <dt>Format</dt>
          <dd>{data.media.format}</dd>
        </dl>
      </DetailsInfoSectionStyled>
    );
  }
}

DetailsInfoSection.propTypes = {
  type: propTypes.string.isRequired,
};

export default DetailsInfoSection;
