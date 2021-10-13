export const ADD_ARTIST = 'ADD_ARTIST';
export const ADD_QUERY = 'ADD_QUERY';

export const addArtist = (artistID) => ({ type: ADD_ARTIST, id: artistID });

export const addQuery = (query, entitie) => ({ type: ADD_QUERY, query, entitie });
