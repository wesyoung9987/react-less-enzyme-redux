import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from '../../src/components/shared/button/button';

describe('<Button/>', () => {

  let wrapper;
  let onButtonClick;

  beforeEach(() => {
    onButtonClick = sinon.spy();
    wrapper = mount(<Button children={'Button Text'} onButtonClick={onButtonClick} />);
  });

  it('should have children prop', () => {
    expect(wrapper.props().children).to.equal('Button Text');
  });

  it('should simulate click events', () => {
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });

});
