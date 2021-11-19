import React from 'react';
import { useSelector } from 'react-redux';
import ReleaseGroupDetailsHeaderStyled from './ReleaseGroupDetailsHeader.styled';

function ReleaseGroupDetailsHeader() {
  const { title, primaryType } = useSelector(({ releaseGroup }) => releaseGroup);
  return (
    <ReleaseGroupDetailsHeaderStyled>
      <h1>{title}</h1>
      <h3>{primaryType}</h3>
    </ReleaseGroupDetailsHeaderStyled>
  );
}

export default ReleaseGroupDetailsHeader;
