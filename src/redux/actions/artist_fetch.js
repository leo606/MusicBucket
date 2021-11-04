import { fetchArtistAPI } from '../../services/musicBrainz';

function artistSerialize(artist) {
  const {
    area, gender, disambiguation, id, type, name, country, isnis, genres,
  } = artist;

  return {
    id,
    name,
    area,
    disambiguation,
    gender,
    type,
    country,
    isnis,
    genres,
    endArea: artist['end-area'] || artist.end_area,
    beginArea: artist['begin-area'] || artist.begin_area,
    releaseGroups: artist['release-groups'],
    typeId: artist['type-id'],
    genderId: artist['gender-id'],
    sortName: artist['sort-name'],
    lifeSpan: artist['life-span'],
  };
}

export const LOAD_ARTIST = 'LOAD_ARTIST';
export const ADD_ARTIST_DATA = 'ADD_ARTIST_DATA';

export const addArtistData = (data) => ({ type: ADD_ARTIST_DATA, data });
export const loadingArtistData = (status) => ({ type: LOAD_ARTIST, status });

export const fetchArtist = (artistMbid) => async (dispatch) => {
  try {
    const resp = await fetchArtistAPI(artistMbid);
    console.log(artistSerialize(resp));
    return dispatch(addArtistData(resp));
  } catch (e) {
    dispatch(loadingArtistData(false));
    return e;
  }
};
