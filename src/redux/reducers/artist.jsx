import { ADD_ARTIST } from "../actions";

const INITIAL = {
  id: '',
  name: ''
};

export default function artist(state = INITIAL, action) {
  switch (action.type) {
    case ADD_ARTIST:
      return {id: action.id, name: action.name}
    default:
      return state;
  }
}