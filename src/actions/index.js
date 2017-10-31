import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_ERROR,
  AUTH_USER
} from './types';

export function signUp({ firstName, lastName, email, password }) {
  if (ROOT_URL) {

    return function(dispatch) {
      axios.post(`${ROOT_URL}/signup`, { firstName, lastName, email, password })
        .then(response => {
          let { firstName, lastName, email } = response.data

          dispatch({
            type: AUTH_USER,
            payload: {
              firstName,
              lastName,
              email
            }
          });

          localStorage.setItem('token', response.data.token);

          // TODO: here the '/' will go to the authed section of the app. Need reflect this in the App component and show authed part of the app.
          browserHistory.push('/');
        })
        .catch(response => {
          dispatch({
            type: AUTH_ERROR,
            payload: {'message': 'Your account could not be created. Please try again.'}
          });
        });
    }
  } else {
    return {
      type: AUTH_ERROR,
      payload: {'message': 'Could not connect to server.'}
    };
  }
}
