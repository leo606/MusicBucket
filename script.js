// const MusicBrainzApi = require('musicbrainz-api').MusicBrainzApi;

// const mbApi = new MusicBrainzApi({
//   appName: 'my-app',
//   appVersion: '0.1.0',
//   appContactInfo: 'user@mail.org'
// });
console.log("artist");

const search_url = "https://musicbrainz.org/ws/2/artist/?fmt=json&query=";
const browse_url = "https://musicbrainz.org/ws/2/release?fmt=json&artist=";

// nirvana 5b11f4ce-a62d-471e-81fc-a69a8278c7da

// https://musicbrainz.org/ws/2/recording?fmt=json&artist=5b11f4ce-a62d-471e-81fc-a69a8278c7da
// https://musicbrainz.org/ws/2/release-group?artist=5b11f4ce-a62d-471e-81fc-a69a8278c7da&type=album|ep

async function getArtist() {
  const MusicBrainzApi = new require('musicbrainz-api').MusicBrainzApi;

  const mbApi = new MusicBrainzApi({
    appName: "my-app",
    appVersion: "0.1.0",
    appContactInfo: "user@mail.org",
  });

  const artist = await mbApi.getEntity(
    "artist",
    "ab2528d9-719f-4261-8098-21849222a0f2"
  );

  console.log("hi");
  console.log(artist);
}

function searchBtnListener() {
  console.log("listenter");
  getArtist();
}

window.onload = () => {
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", searchBtnListener);
};
