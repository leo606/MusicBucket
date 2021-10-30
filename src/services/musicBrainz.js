const SEARCH_URL = 'https://musicbrainz.org/ws/2';
const ARTIST_URL = 'https://musicbrainz.org/ws/2/artist/';
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
    const req = await fetch(`${ARTIST_URL}${artistMbid}?inc=release-groups`, OPTIONS);
    const resp = await req.json();
    return resp;
  } catch (e) {
    return e;
  }
}
