const search_url = 'https://musicbrainz.org/ws/2/artist/?fmt=json&query=';
const browse_url = 'https://musicbrainz.org/ws/2/release?fmt=json&artist=';

// nirvana 5b11f4ce-a62d-471e-81fc-a69a8278c7da

// https://musicbrainz.org/ws/2/recording?fmt=json&artist=5b11f4ce-a62d-471e-81fc-a69a8278c7da
// https://musicbrainz.org/ws/2/release-group?artist=5b11f4ce-a62d-471e-81fc-a69a8278c7da&type=album|ep

window.onload = () => {
  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', searchBtnListener);
};

function appendSearch(searchJson) {
  const artistTitle = document.getElementById('artist-title');
  artistTitle.innerHTML = searchJson.artists[0].name;
}

async function fetchBrowse(mbid) {
  try {
    const browseItem = await fetch(`${browse_url}${mbid}`);
    const browseObj = await browseItem.json();
    console.log(browseObj);
  } catch (error) {
    console.log(error);
  }
}

async function fetchSearch(query) {
  try {
    const searchItem = await fetch(`${search_url}${query}`);
    const searchObj = await searchItem.json();
    console.log(searchObj);
    appendSearch(searchObj);
  } catch (error) {
    console.log(error);
  }
}

function searchBtnListener(event) {
  const searchQuery = document.getElementById('search-input').value;
  if (searchQuery) fetchSearch(searchQuery);
}
