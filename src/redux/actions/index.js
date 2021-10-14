import fetchSearchAPI from '../../services/musicBrainz';

export const ADD_ARTIST = 'ADD_ARTIST';
export const ADD_QUERY = 'ADD_QUERY';
export const ADD_DATA = 'ADD_DATA';

export const addArtist = (artistID) => ({ type: ADD_ARTIST, id: artistID });

export const addQuery = (text, entitie) => ({ type: ADD_QUERY, text, entitie });

export const addData = (data) => ({ type: ADD_DATA, data });

export const fetchSearch = (query, entitie) => async (dispatch) => {
  try {
    const resp = await fetchSearchAPI(query, entitie);
    return dispatch(addData(resp));
  } catch (e) {
    return e;
  }
};
