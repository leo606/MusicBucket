const SEARCH_URL = 'https://musicbrainz.org/ws/2';
const ARTIST_URL = 'https://musicbrainz.org/ws/2/artist/';
const RELEASE_GROUP_URL = 'https://musicbrainz.org/ws/2/release-group/';
const RELEASE_URL = 'https://musicbrainz.org/ws/2/release/';
const OPTIONS = { headers: { Accept: 'application/json' } };

export async function fetchSearchAPI(query, entitie) {
  try {
    const req = await fetch(`${SEARCH_URL}/${entitie}?query=${query}`, OPTIONS);
    const resp = await req.json();
    return resp;
  } catch (e) {
    return e;
  }
}

export async function fetchArtistAPI(artistMbid) {
  try {
    const req = await fetch(
      `${ARTIST_URL}${artistMbid}?inc=release-groups+genres`,
      OPTIONS,
    );
    const resp = await req.json();
    return resp;
  } catch (e) {
    return e;
  }
}

export async function fetchReleaseGroupAPI(releaseMbid) {
  try {
    const req = await fetch(
      `${RELEASE_GROUP_URL}${releaseMbid}?inc=artist-credits+releases+media`,
      OPTIONS,
    );
    const resp = await req.json();
    return resp;
  } catch (e) {
    return e;
  }
}

export async function fetchReleaseAPI(releaseMbid) {
  try {
    const req = await fetch(
      `${RELEASE_URL}${releaseMbid}?inc=artists+recordings`,
      OPTIONS,
    );
    const resp = await req.json();
    return resp;
  } catch (e) {
    return e;
  }
}
