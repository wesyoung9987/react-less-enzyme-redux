import React, { Component } from 'react';
import { Route } from 'react-router';

import Signup from '../../auth/signup/signup';

require('./unauthed.less');

class Unauthed extends Component {
  render() {
    return (
      <div className="app-unauthed">
        <Route path='/signup' component={Signup}/>
      </div>
    );
  }
}

export default Unauthed;
