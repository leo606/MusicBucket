import {
  ADD_ARTIST_DATA,
  LOAD_ARTIST,
  CLEAN_ARTIST_DATA,
} from '../actions';

const INITIAL = {
  isLoading: true,
  'release-groups': [],
};

export default function artist(state = INITIAL, action) {
  switch (action.type) {
    case ADD_ARTIST_DATA:
      return { ...action.data, isLoading: false };
    case LOAD_ARTIST:
      return { ...state, isLoading: action.status };
    case CLEAN_ARTIST_DATA:
      return { ...INITIAL };
    default:
      return state;
  }
}
