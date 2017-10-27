import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../../shared/button/button';

let SignupForm = props => {
  const { handleSubmit } = props;
  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <Field className="form-control" name='firstName' component='input' type='text' placeholder="Enter First Name" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <Field className="form-control" name='lastName' component='input' type='text' placeholder="Enter Last Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field className="form-control" name='email' component='input' type='email' placeholder="Enter Email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field className="form-control" name='password' component='input' type='password' placeholder="Enter Password" />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field className="form-control" name='confirmPassword' component='input' type='password' placeholder="Comfirm Password" />
      </div>
      <Button onButtonClick={handleSubmit}>Sign Up</Button>
    </form>
  );
}

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm);

export default SignupForm;
