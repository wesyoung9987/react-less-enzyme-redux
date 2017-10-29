import authReducer from '../../src/reducers/auth_reducer';
import {
  SIGN_UP,
  AUTH_ERROR,
  AUTH_USER
} from '../../src/actions/types';

describe('Auth Reducer', () => {

  it('handles action with unknown type', () => {
    expect(authReducer(undefined, {})).to.eql({});
  });

  // TODO: create tests for other action types and implement auth reducer

});
