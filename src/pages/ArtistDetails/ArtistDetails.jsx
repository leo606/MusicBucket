import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ArtistDetailsHeader, ArtistAlbumsList } from './components';
import InfoSection from '../../components/InfoSection/InfoSection';
import { fetchArtist, cleanArtisData } from '../../redux/actions';
import StyledMainDetais from './ArtistDetails.styled';

export default function ArtistDetails() {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const artistData = useSelector(({ artist }) => artist);

  useEffect(() => {
    dispatch(fetchArtist(artistId));
    return () => dispatch(cleanArtisData());
  }, []);

  if (artistData.isLoading) return <span>load</span>;

  return (
    <StyledMainDetais>
      <ArtistDetailsHeader />
      <InfoSection type="artist" />
      <ArtistAlbumsList />
    </StyledMainDetais>
  );
}
