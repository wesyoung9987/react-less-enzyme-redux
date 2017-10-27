import React from 'react';

import Unauthed from '../../../src/components/layout/unauthed/unauthed';

describe('<Unauthed/>', () => {

  it('should exist', () => {
    const wrapper = shallow(<Unauthed/>);
    expect(wrapper.find('.app-unauthed')).to.have.length(1);
  });

});
