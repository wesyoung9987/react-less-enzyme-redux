import React from 'react';
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';

import { SIGN_UP } from '../../src/actions/types';
import { signUp } from '../../src/actions';

describe('actions', () => {
  describe('signUp', () => {

    let signup = sinon.spy();
    let data;

    beforeEach(() => {
      data = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@mail.com',
        password: '123456'
      };
      signup(data);
    });

    it('has the correct type', () => {
      expect(signup.calledOnce).to.equal(true);
    });

    it('should be called with firstName, lastName, email and password arguments', () => {
      let expected = ['firstName', 'lastName', 'email', 'password'];
      let args = signup.args[0][0];
      let hasArgs = true;
      expected.forEach(item => {
        if (!args.hasOwnProperty(item)) {
          hasArgs = false;
        }
      });
      expect(hasArgs).to.equal(true);
    });

    it('should made a request to sign up the user', () => {

      describe('axios', () => {

        let onFulfilled;

        beforeEach(() => {
          moxios.install();
          moxios.stubRequest('/signup', {
            status: 201,
            response: {
              id: 12345,
              firstName: 'John',
              lastName: 'Doe',
              'email': 'test@mail.com',
              'token': 'token'
            }
          });

          onFulfilled = sinon.spy();
          axios.post('/signup').then(onFulfilled);
        });

        afterEach(() => {
          moxios.uninstall();
        });

        it('should fulfill the request', (done) => {
          moxios.wait(() => {
            expect(onFulfilled.called).to.equal(true);
            done();
          });
        });

        it('should respond with the users data and a token', (done) => {
          let data = ['id', 'firstName', 'lastName', 'email', 'token'];
          let hasData = true;
          moxios.wait(() => {
            let response = onFulfilled.getCall(0).args[0].data;
            for (var key in response) {
              if (data.indexOf(key) === -1) {
                hasData = false;
              }
            }
            expect(hasData).to.equal(true);
            done();
          });
        });

      });

    });

  });
});
