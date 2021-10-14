import { ADD_ARTIST } from '../actions';

const INITIAL = {
  id: '',
};

export default function artist(state = INITIAL, action) {
  switch (action.type) {
    case ADD_ARTIST:
      return { id: action.id };
    default:
      return state;
  }
}
