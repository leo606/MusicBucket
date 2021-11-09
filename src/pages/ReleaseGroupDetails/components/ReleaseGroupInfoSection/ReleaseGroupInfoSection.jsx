import React from 'react';
import { useSelector } from 'react-redux';
import ReleaseGroupDetailsStyled from '../../ReleaseGroupDetails.styled';

function ReleaseGroupInfoSection() {
  const { primaryType, releases } = useSelector((state) => state.releaseGroup);
  return (
    <ReleaseGroupDetailsStyled>
      <dl>
        <dt>Type</dt>
        <dd>{primaryType}</dd>
        <dt>Releases count</dt>
        <dd>{releases.length}</dd>
      </dl>
    </ReleaseGroupDetailsStyled>
  );
}

export default ReleaseGroupInfoSection;
