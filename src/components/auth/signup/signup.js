import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import SignupForm from './signup_form';

require('./signup.less');

class Signup extends Component {

  submit(values) {
    this.props.signUp(values);
  }

  render() {
    return (
      <div className="app-signup">
        <div className="form-container">
          <SignupForm className="signup-form" onSubmit={this.submit.bind(this)} />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Signup);
