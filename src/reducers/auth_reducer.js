import {
  SIGN_UP,
  AUTH_ERROR,
  AUTH_USER
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, user: action.payload, authenticated: true, error: '' };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}
