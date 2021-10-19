import { TOGGLE_THEME } from '../actions';

const INITITAL = 'light';

export default function theme(state = INITITAL, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return action.theme;
    default:
      return state;
  }
}
