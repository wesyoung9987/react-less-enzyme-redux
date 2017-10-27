import React from 'react';
import sinon from 'sinon';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../../src/components/layout/unauthed/header/header';

describe('<Header/>', () => {

  it('should have a sign in button', () => {
    const wrapper = render(<Router><Header/></Router>);
    var button = wrapper.find('button');
    expect(button).to.have.length(1);
    expect(button.text()).to.equal('Sign In');
  });
});
