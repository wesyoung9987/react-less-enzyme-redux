import React from 'react';

import Authed from '../../../src/components/layout/authed/authed';

describe('<Authed/>', () => {

  it('should exist', () => {
    let wrapper = shallow(<Authed/>)
    expect(wrapper.find('.app-authed')).to.have.length(1);
  });

});
