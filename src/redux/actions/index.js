import { fetchSearchAPI, fetchArtistAPI } from '../../services/musicBrainz';

export const ADD_QUERY = 'ADD_QUERY';
export const ADD_SEARCH_DATA = 'ADD_SEARCH_DATA';
export const ADD_ARTIST_DATA = 'ADD_SEARCH_DATA';
export const CLEAN_DATA = 'CLEAN_DATA';
export const LOAD_SEARCH = 'LOAD_SEARCH';
export const LOAD_ARTIST = 'LOAD_ARTIST';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export const addSearchQuery = (text, entitie) => ({ type: ADD_QUERY, text, entitie });

export const setTheme = (theme) => ({ type: TOGGLE_THEME, theme });

export const addSearchData = (data) => ({ type: ADD_SEARCH_DATA, data });
export const cleanSearchData = () => ({ type: CLEAN_DATA });
export const loadingSearchData = (status) => ({ type: LOAD_SEARCH, status });

export const addArtistData = (data) => ({ type: ADD_ARTIST_DATA, data });
export const loadingArtistData = (status) => ({ type: LOAD_ARTIST, status });

export const fetchSearch = (query, entitie) => async (dispatch) => {
  try {
    const resp = await fetchSearchAPI(query, entitie);
    return dispatch(addSearchData(resp));
  } catch (e) {
    dispatch(loadingSearchData(false));
    return e;
  }
};

export const fetchArtist = (artistMbid) => async (dispatch) => {
  try {
    const resp = await fetchArtistAPI(artistMbid);
    return dispatch(addArtistData(resp));
  } catch (e) {
    dispatch(loadingArtistData(false));
    return e;
  }
};
