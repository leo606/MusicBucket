const SEARCH_URL = 'https://musicbrainz.org/ws/2';

async function fetchSearchAPI(query, entitie) {
  try {
    const opts = { headers: { Accept: 'application/json' } };
    const req = await fetch(`${SEARCH_URL}/${entitie}?query=${query}`, opts);
    const resp = await req.json();
    return resp;
  } catch (e) {
    return e;
  }
}

export default fetchSearchAPI;
