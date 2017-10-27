import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import Button from '../../../shared/button/button';
require('./header.less');

class Header extends Component {

  render() {
    return (
      <div className="app-header">
        <Link to='/sigin'><Button>Sign In</Button></Link>
      </div>
    );
  }
}

export default Header;
