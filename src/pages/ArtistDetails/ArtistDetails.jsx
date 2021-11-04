import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ArtistDetailsHeader } from '../../components';
import useAlbumsFilter from '../../hooks/useAlbumsFilter';
import { fetchArtist, cleanArtisData } from '../../redux/actions';
import StyledMainDetais from './ArtistDetails.styled';

export default function ArtistDetails() {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const artistData = useSelector(({ artist }) => artist);
  const [mainAlbums, compilations, eps] = useAlbumsFilter();

  useEffect(() => {
    dispatch(fetchArtist(artistId));
    return () => dispatch(cleanArtisData());
  }, []);

  if (artistData.isLoading) return <span>load</span>;

  return (
    <StyledMainDetais>
      <ArtistDetailsHeader />
      <br />
      <br />
      <section>
        <dl>
          <dt>Country</dt>
          <dd>{artistData.country}</dd>
          <dt>Activity</dt>
          <dd>
            {new Date(artistData.lifeSpan.begin).getUTCFullYear()}
            {' '}
            -
            {' '}
            {artistData.lifeSpan.ended ? new Date(artistData.lifeSpan.end).getUTCFullYear() : 'today'}
          </dd>
          <dd>
            {artistData.genres.map(({ name }) => (
              <span>
                {name}
              </span>
            ))}
          </dd>
        </dl>
      </section>
      <br />
      <br />
      <ul>
        {mainAlbums.map((album) => <li>{album.title}</li>)}
      </ul>
      <hr />
      <ul>
        {compilations.map((album) => <li>{album.title}</li>)}
      </ul>
      <hr />
      <ul>
        {eps.map((album) => <li>{album.title}</li>)}
      </ul>
    </StyledMainDetais>
  );
}
