import { ADD_ARTIST_DATA, LOAD_ARTIST } from '../actions';

const INITIAL = {
  isLoading: true,
};

export default function artist(state = INITIAL, action) {
  switch (action.type) {
    case ADD_ARTIST_DATA:
      return { ...state, ...action.data, isLoading: false };
    case LOAD_ARTIST:
      return { ...state, isLoading: action.status };
    default:
      return state;
  }
}
