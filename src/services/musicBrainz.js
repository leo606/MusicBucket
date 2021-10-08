const ROOT_URL = "https://musicbrainz.org/ws/2/artist/";

async function fetchArtistReleaseGroup(artistId) {
  try {
    const options = { headers: { Accept: "application/json" } };
    const request = await fetch(
      `${ROOT_URL}${artistId}?inc=release-groups&fmt=json`,
      options
    );
    const response = await request.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}

export default fetchArtistReleaseGroup;
