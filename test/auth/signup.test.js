import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import sinon from 'sinon';

import reducers from '../../src/reducers';
import Signup from '../../src/components/auth/signup/signup';

describe('<Signup/>', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Signup store={createStore(reducers)}/>).dive();
  });

  it('should exist', () => {
    expect(wrapper.find('.app-signup')).to.have.length(1);
  });

  it('should have a signup form', () => {
    expect(wrapper.find('.signup-form')).to.have.length(1);
  })

});
