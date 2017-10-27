import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../../src/reducers';
import SignupForm from '../../src/components/auth/signup/signup_form';

describe('<SignupForm/>', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Provider store={createStore(reducers)}><SignupForm/></Provider>);
  });

  it('should have a form', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('should have a form field for first and last names, email, password and confirm password', () => {
    expect(wrapper.find('input')).to.have.length(5);
  })

  it('should have a submit button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

});
