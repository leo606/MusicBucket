import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  ReleaseHeader, DetailsInfoSection, ReleaseList, Loading,
} from '../../components';
import { fetchRelease, cleanReleaseData } from '../../redux/actions';
import ReleaseDetailsMainStyled from './ReleaseDetails.styled';

function ReleaseDetails() {
  const { releaseId } = useParams();
  const release = useSelector((state) => state.release);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelease(releaseId));
    return () => dispatch(cleanReleaseData());
  }, []);

  if (release.isLoading) return <Loading />;

  return (
    <ReleaseDetailsMainStyled>
      <ReleaseHeader type="release" />
      <DetailsInfoSection type="release" />
      <ReleaseList type="release" />
    </ReleaseDetailsMainStyled>
  );
}

export default ReleaseDetails;
