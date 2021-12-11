import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReleaseListStyled from './ReleaseList.styled';

function ReleaseList({ type }) {
  const release = useSelector((state) => state[type]);
  if (type === 'releaseGroup') {
    return (
      <ReleaseListStyled>
        <h4>Releases</h4>
        <ul>
          {release.releases.map((r) => (
            <Link to={`/release/${r.id}`}>
              <li key={r.id}>
                {' '}
                {r.media[0] && r.media[0].format}
                {' '}
                {r.date}
              </li>
            </Link>
          ))}
        </ul>
      </ReleaseListStyled>
    );
  }

  if (type === 'release') {
    return (
      <ReleaseListStyled>
        <h4>Track List</h4>
        <ol>
          {release.media.tracks.map((t) => (
            <li key={t.id}>
              {t.title}
            </li>
          ))}
        </ol>
      </ReleaseListStyled>
    );
  }
}

ReleaseList.propTypes = {
  type: propTypes.string.isRequired,
};

export default ReleaseList;
