import React, {useState} from "react";
const ROOT_URL = "https://musicbrainz.org/ws/2/artist/";

//5b11f4ce-a62d-471e-81fc-a69a8278c7da

function App(){
  const [artist, setArtist] = useState('');
  const [albums, setAbums] = useState([]);

  async function fetchEndpoint() {
    try{
      const request = await fetch(`${ROOT_URL}${artist}?inc=release-groups&fmt=json`);
      const response = await request.json();
      console.log(response["release-groups"]);
      setAbums(response["release-groups"].filter((re)=> re["primary-type"] === "Album" && !re["secondary-types"].length))
    }catch(e){
      console.log(e);
    }
  }

  return (
    <>
      <h1>MF</h1>
      <h2>m</h2>
      <input type="text" name="artistId" onChange={({target})=> setArtist(target.value)} />
      <input type="button" value="search" onClick={fetchEndpoint} />
      {albums.length && (
        <ol>
          {albums.map((alb)=> <li>{alb.title}</li> )}
        </ol>
      )}
    </>
  );
}

export default App;
