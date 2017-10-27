import React, { Component } from 'react';
import { Route } from 'react-router';

import Unauthed from './layout/unauthed/unauthed';
import Header from './layout/unauthed/header/header';
import './app.less';

class App extends Component {

  render() {
    return (
      <div className="main-app">
        <Header/>
        <Route path='/' component={Unauthed} />
      </div>
    );
  }
}

export default App;
