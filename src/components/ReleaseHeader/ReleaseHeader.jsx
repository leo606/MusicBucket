import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ReleaseHeaderStyled from './ReleaseHeader.styled';

function ReleaseHeader({ type }) {
  const release = useSelector((state) => state[type]);

  if (type === 'releaseGroup') {
    return (
      <ReleaseHeaderStyled>
        <h1>{release.title}</h1>
        <h3>{release.primaryType}</h3>
      </ReleaseHeaderStyled>
    );
  }

  if (type === 'release') {
    return (
      <ReleaseHeaderStyled>
        <h1>{release.title}</h1>
        <h3>
          {release.releaseGroup['primary-type']}
          {' '}
          by
          {' '}
          {release.mainArtist.name}
        </h3>
      </ReleaseHeaderStyled>
    );
  }
}

ReleaseHeader.propTypes = {
  type: propTypes.string.isRequired,
};

export default ReleaseHeader;
