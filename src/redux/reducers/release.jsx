import { ADD_RELEASE_DATA, LOAD_RELEASE, CLEAN_RELEASE_DATA } from '../actions';

const INITIAL = {
  isLoading: true,
};

export default function release(state = INITIAL, action) {
  switch (action.type) {
    case ADD_RELEASE_DATA:
      return { ...action.data, isLoading: false };
    case LOAD_RELEASE:
      return { ...state, isLoading: action.status };
    case CLEAN_RELEASE_DATA:
      return { ...INITIAL };
    default:
      return state;
  }
}
