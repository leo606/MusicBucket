import { fetchReleaseGroupAPI } from '../../services/musicBrainz';

export const ADD_RELEASE_GROUP_DATA = 'ADD_RELEASE_GROUP_DATA';
export const LOAD_RELEASE = 'LOAD_RELEASE';

export const addReleaseGroupData = (data) => ({ type: ADD_RELEASE_GROUP_DATA, data });
export const loadingReleaseGroupData = (status) => ({ type: LOAD_RELEASE, status });

function releaseGroupSerialize(group) {
  const {
    title, id, releases, disambiguation,
  } = group;
  return {
    id,
    title,
    releases,
    artistCredit: group['artist-credit'],
    disambiguation,
    firstReleaseDate: group['first-release-date'],
    primaryType: group['primary-type'],
    primaryTypeId: group['primary-type-id'],
    secondaryTypes: group['secondary-types'],
    secondaryTypesId: group['secondary-type-ids'],
  };
}

export const fetchReleaseGroup = (releaseMbid) => async (dispatch) => {
  try {
    const resp = await fetchReleaseGroupAPI(releaseMbid);
    return dispatch(addReleaseGroupData(releaseGroupSerialize(resp)));
  } catch (e) {
    dispatch(loadingReleaseGroupData(false));
    return e;
  }
};
