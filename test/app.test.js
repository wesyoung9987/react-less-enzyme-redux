import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'

import App from '../src/components/App';

describe('<App />', () => {
  it('has a header', () => {
    const wrapper = render(<Router><App /></Router>);
    expect(wrapper.find('.app-header')).to.have.length(1);
  });
});
