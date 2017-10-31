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
    describe('AUTH_USER', () => {

      let action;
      let result;
      beforeEach(() => {
        action = {
          'type': AUTH_USER,
          'payload': {
            firstName: 'John',
            lastName: 'Doe',
            email: 'test@mail.com'
          }
        };
        result = authReducer({}, action);
      });

      it('authenticates a user', () => {
        expect(result.authenticated).to.equal(true);
      });

      it('removes any auth error messages', () => {
        expect(result.error).to.equal('');
      });

      it('creates a user object', () => {
        expect(result.user).to.exist;
      });

      it('creates a user first name', () => {
        expect(result.user.firstName).to.equal('John');
      });

      it('creates a user last name', () => {
        expect(result.user.lastName).to.equal('Doe');
      });

      it('creates a user email', () => {
        expect(result.user.email).to.equal('test@mail.com');
      });
    });

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
