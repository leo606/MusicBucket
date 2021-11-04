import { fetchArtistAPI } from '../../services/musicBrainz';

export const LOAD_ARTIST = 'LOAD_ARTIST';
export const ADD_ARTIST_DATA = 'ADD_ARTIST_DATA';

export const addArtistData = (data) => ({ type: ADD_ARTIST_DATA, data });
export const loadingArtistData = (status) => ({ type: LOAD_ARTIST, status });

export const fetchArtist = (artistMbid) => async (dispatch) => {
  try {
    const resp = await fetchArtistAPI(artistMbid);
    return dispatch(addArtistData(resp));
  } catch (e) {
    dispatch(loadingArtistData(false));
    return e;
  }
};
