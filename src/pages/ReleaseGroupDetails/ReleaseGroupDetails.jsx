import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchReleaseGroup, cleanReleaseGroupData } from '../../redux/actions';
import ReleaseGroupInfoSection from './components/ReleaseGroupInfoSection/ReleaseGroupInfoSection';
import ReleaseGroupDetailsStyled from './ReleaseGroupDetails.styled';

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
      <ReleaseGroupInfoSection />
    </ReleaseGroupDetailsStyled>
  );
}

export default ReleaseGroupDetails;
