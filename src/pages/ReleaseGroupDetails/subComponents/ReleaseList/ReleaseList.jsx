import React from 'react';
import { useSelector } from 'react-redux';
import ReleaseListStyled from './ReleaseList.styled';

function ReleaseList() {
  const releases = useSelector(({ releaseGroup }) => releaseGroup.releases);
  return (
    <ReleaseListStyled>
      <ul>
        {releases.map((r) => (
          <li key={r.id}>
            {r.title}
            {' '}
            -
            {' '}
            {r.media[0].format}
            {' '}
            {r.date}
          </li>
        ))}
      </ul>
    </ReleaseListStyled>
  );
}

export default ReleaseList;
