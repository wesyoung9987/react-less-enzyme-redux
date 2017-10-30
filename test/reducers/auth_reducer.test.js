import authReducer from '../../src/reducers/auth_reducer';
import {
  AUTH_ERROR,
  AUTH_USER
} from '../../src/actions/types';

describe('Auth Reducer', () => {

  it('handles action with unknown type', () => {
    expect(authReducer(undefined, {})).to.eql({});
  });

  it('handles action of type AUTH_USER', () => {
    const action = { 'type': AUTH_USER };
    var result = authReducer({}, action);
    console.log(result.authenticated);
    expect(result.authenticated).to.equal(true);
    expect(result.error).to.equal('');
  });

  it('handles action of type AUTH_ERROR', () => {
    const action = { type: AUTH_ERROR, payload: 'Authentication error.'};
    expect(authReducer({}, action)).to.eql({error: 'Authentication error.'});
  });

});



  // it('handles action of type SAVE_COMMENT', () => {
  //   const action = { type: SAVE_COMMENT, payload: 'new comment'};
  //   expect(commentReducer([], action)).to.eql(['new comment']);
  // });
