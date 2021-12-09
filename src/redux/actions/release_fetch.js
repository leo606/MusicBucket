import { fetchReleaseAPI } from '../../services/musicBrainz';

export const ADD_RELEASE_DATA = 'ADD_RELEASE_DATA';
export const LOAD_RELEASE = 'LOAD_RELEASE';

export const addReleaseData = (data) => ({ type: ADD_RELEASE_DATA, data });
export const loadingReleaseData = (status) => ({ type: LOAD_RELEASE, status });

function releaseSerialize(release) {
  const {
    title, id, disambiguation, barcode, date, packaging, country, quality, asin,
  } = release;
  return {
    id,
    title,
    mainArtist: release['artist-credit'][0].artist,
    disambiguation,
    statusId: release['status-id'],
    releaseGroup: release['release-group'],
    textRepresentation: release['text-representation'],
    packagingId: release['packaging-id'],
    barcode,
    date,
    releaseEvents: release['release-events'],
    coverArtArchive: release['cover-art-archive'],
    packaging,
    country,
    quality,
    media: release.media[0],
    asin,
  };
}

export const fetchRelease = (releaseMbid) => async (dispatch) => {
  try {
    const resp = await fetchReleaseAPI(releaseMbid);
    return dispatch(addReleaseData(releaseSerialize(resp)));
  } catch (e) {
    dispatch(loadingReleaseData(false));
    return e;
  }
};
