export const ADD_ARTIST = 'ADD_ARTIST';

export const addArtist = (artist) => ({ type: ADD_ARTIST, name: artist.name });