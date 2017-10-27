import React from 'react';
import { SIGN_UP } from '../../src/actions/types';
import { signUp } from '../../src/actions';

describe('actions', () => {
  describe('signUp', () => {

    let action;

    beforeEach(() => {
      var data = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@mail.com',
        password: '123456',
        confirmPassword: '123456'
      };
      action = signUp(data);
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(SIGN_UP);
    });

    it('payload has firstName', () => {
      expect(action.payload.firstName).to.equal('John');
    });

    it('payload has lastName', () => {
      expect(action.payload.lastName).to.equal('Doe');
    });

    it('payload has email', () => {
      expect(action.payload.email).to.equal('test@mail.com');
    });

    it('payload has password', () => {
      expect(action.payload.password).to.equal('123456');
    });

    it('payload has confirmPassword', () => {
      expect(action.payload.confirmPassword).to.equal('123456');
    });

  });
});
