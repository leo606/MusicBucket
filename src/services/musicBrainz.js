// const ROOT_URL = 'https://musicbrainz.org/ws/2/artist/';
const SEARCH_URL = 'https://musicbrainz.org/ws/2';

// async function fetchArtistReleaseGroup(artistId) {
//   try {
//     const options = { headers: { Accept: 'application/json' } };
//     const request = await fetch(
//       `${ROOT_URL}${artistId}?inc=release-groups&fmt=json`,
//       options,
//     );
//     const response = await request.json();
//     return response;
//   } catch (e) {
//     return console.log(e);
//   }
// }

// export default fetchArtistReleaseGroup;

async function fetchSearchAPI(query, entitie) {
  try {
    const opts = { headers: { Accept: 'application/json' } };
    const req = await fetch(`${SEARCH_URL}/${entitie}/${query}`, opts);
    const resp = await req.json();
    return resp;
  } catch (e) {
    return e;
  }
}

export default fetchSearchAPI;
