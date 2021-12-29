import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReleaseListStyled from './ReleaseList.styled';

function ReleaseList({ type }) {
  const release = useSelector((state) => state[type]);

  function msToMin(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  if (type === 'releaseGroup') {
    return (
      <ReleaseListStyled>
        <h4>Releases</h4>
        <ul>
          {release.releases.map((r) => (
            <li key={r.id}>
              <Link to={`/release/${r.id}`}>
                {' '}
                {r.media[0] && r.media[0].format}
                {' '}
                <span>{r.date}</span>
              </Link>
            </li>
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
              <div>
                {`${t.position} - ${t.title}`}
                <span>
                  length:
                  {' '}
                  {msToMin(t.length)}
                </span>
              </div>
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
