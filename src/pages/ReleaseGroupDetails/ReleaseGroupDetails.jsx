import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchReleaseGroup } from '../../redux/actions';
import ReleaseGroupDetailsStyled from './ReleaseGroupDetails.styled';

function ReleaseGroupDetails() {
  const dispatch = useDispatch();
  const { releaseId } = useParams();

  useEffect(() => {
    dispatch(fetchReleaseGroup(releaseId));
  }, []);

  return (
    <ReleaseGroupDetailsStyled>
      release details
    </ReleaseGroupDetailsStyled>
  );
}

export default ReleaseGroupDetails;
