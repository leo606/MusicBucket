import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchRelease } from '../../redux/actions';
import ReleaseDetailsStyled from './ReleaseDetails.styled';

function ReleaseDetails() {
  const dispatch = useDispatch();
  const { releaseId } = useParams();

  useEffect(() => {
    dispatch(fetchRelease(releaseId));
  }, []);
  return (
    <ReleaseDetailsStyled>
      release details
    </ReleaseDetailsStyled>
  );
}

export default ReleaseDetails;
