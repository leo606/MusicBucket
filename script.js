const SEARCH_URL = 'https://musicbrainz.org/ws/2/artist/?fmt=json&query=';

window.onload = () => {
  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', searchBtnListener);
};

function appendSearch(searchJson) {
  const artistTitle = document.getElementById('artist-title');
  artistTitle.innerHTML = searchJson.artists[0].name;
}

async function fetchSearch(query) {
  try {
    const fetchItem = await fetch(`${SEARCH_URL}${query}`);
    const json = await fetchItem.json();
    console.log(json);
    appendSearch(json);
  } catch (error) {
    console.log(error);
  }
}

function searchBtnListener(event) {
  const searchQuery = document.getElementById('search-input').value;
  fetchSearch(searchQuery);
}
