import { SIGN_UP } from './types';

export function signUp(userData) {
  return {
    type: SIGN_UP,
    payload: userData
  };
}
