import React from 'react';

import Signin from '../../src/components/auth/signin/signin';

describe('<Signin/>', () => {

  it('should exist', () => {
    let wrapper = shallow(<Signin/>);
    expect(wrapper.find('.app-signin')).to.have.length(1);
  });

});
