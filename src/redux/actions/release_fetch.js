import { fetchReleaseAPI } from '../../services/musicBrainz';

export const ADD_RELEASE_DATA = 'ADD_RELEASE_DATA';
export const LOAD_RELEASE = 'LOAD_RELEASE';

export const addReleaseData = (data) => ({ type: ADD_RELEASE_DATA, data });
export const loadingReleaseData = (status) => ({ type: LOAD_RELEASE, status });

export const fetchRelease = (releaseMbid) => async (dispatch) => {
  try {
    const resp = await fetchReleaseAPI(releaseMbid);
    return dispatch(addReleaseData(resp));
  } catch (e) {
    return e;
  }
};
