import fetchSearchAPI from '../../services/musicBrainz';

export const ADD_ARTIST = 'ADD_ARTIST';
export const ADD_QUERY = 'ADD_QUERY';
export const ADD_DATA = 'ADD_DATA';
export const CLEAN_DATA = 'CLEAN_DATA';
export const LOAD = 'LOAD';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export const addArtist = (artistID) => ({ type: ADD_ARTIST, id: artistID });

export const addSearchQuery = (text, entitie) => ({ type: ADD_QUERY, text, entitie });

export const setTheme = (theme) => ({ type: TOGGLE_THEME, theme });

export const addSearchData = (data) => ({ type: ADD_DATA, data });
export const cleanSearchData = () => ({ type: CLEAN_DATA });
export const loadingSearchData = (status) => ({ type: LOAD, status });

export const fetchSearch = (query, entitie) => async (dispatch) => {
  try {
    const resp = await fetchSearchAPI(query, entitie);
    return dispatch(addSearchData(resp));
  } catch (e) {
    dispatch(loadingSearchData(false));
    return e;
  }
};
