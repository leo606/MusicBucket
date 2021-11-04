import { fetchSearchAPI } from '../../services/musicBrainz';

export const LOAD_SEARCH = 'LOAD_SEARCH';
export const ADD_SEARCH_DATA = 'ADD_SEARCH_DATA';

export const addSearchData = (data) => ({ type: ADD_SEARCH_DATA, data });
export const loadingSearchData = (status) => ({ type: LOAD_SEARCH, status });

export const fetchSearch = (query, entitie) => async (dispatch) => {
  try {
    const resp = await fetchSearchAPI(query, entitie);
    return dispatch(addSearchData(resp));
  } catch (e) {
    dispatch(loadingSearchData(false));
    return e;
  }
};
