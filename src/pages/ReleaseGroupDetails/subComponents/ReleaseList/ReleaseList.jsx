import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReleaseListStyled from './ReleaseList.styled';

function ReleaseList() {
  const releases = useSelector(({ releaseGroup }) => releaseGroup.releases);
  return (
    <ReleaseListStyled>
      <ul>
        {releases.map((r) => (
          <Link to={`/release/${r.id}`}>
            <li key={r.id}>
              {r.title}
              {' '}
              -
              {' '}
              {r.media[0].format}
              {' '}
              {r.date}
            </li>
          </Link>
        ))}
      </ul>
    </ReleaseListStyled>
  );
}

export default ReleaseList;
