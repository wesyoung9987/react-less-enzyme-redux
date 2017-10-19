import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import App from '../src/components/App';


sinon.spy(App.prototype, 'componentDidMount');

describe('<App />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
