import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchReleaseGroup, cleanReleaseGroupData } from '../../redux/actions';
import {
  DetailsInfoSection, ReleaseHeader, ReleaseList, Loading,
} from '../../components';
import ReleaseGroupDetailsStyled from './ReleaseGroupDetails.styled';

function ReleaseGroupDetails() {
  const dispatch = useDispatch();
  const release = useSelector((state) => state.releaseGroup);
  const { releaseId } = useParams();

  useEffect(() => {
    dispatch(fetchReleaseGroup(releaseId));
    return () => dispatch(cleanReleaseGroupData());
  }, []);

  if (release.isLoading) return <Loading />;
  return (
    <ReleaseGroupDetailsStyled>
      <ReleaseHeader type="releaseGroup" />
      <DetailsInfoSection type="releaseGroup" />
      <ReleaseList type="releaseGroup" />
    </ReleaseGroupDetailsStyled>
  );
}

export default ReleaseGroupDetails;
