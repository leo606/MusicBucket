import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchReleaseGroup, cleanReleaseGroupData } from '../../redux/actions';
import { DetailsInfoSection } from '../../components';
import ReleaseGroupDetailsStyled from './ReleaseGroupDetails.styled';
import ReleaseList from './subComponents/ReleaseList/ReleaseList';

function ReleaseGroupDetails() {
  const dispatch = useDispatch();
  const release = useSelector((state) => state.releaseGroup);
  const { releaseId } = useParams();

  useEffect(() => {
    dispatch(fetchReleaseGroup(releaseId));
    return () => dispatch(cleanReleaseGroupData());
  }, []);

  if (release.isLoading) return <span>load</span>;
  return (
    <ReleaseGroupDetailsStyled>
      {release.title}
      <DetailsInfoSection type="releaseGroup" />
      <ReleaseList />
    </ReleaseGroupDetailsStyled>
  );
}

export default ReleaseGroupDetails;
