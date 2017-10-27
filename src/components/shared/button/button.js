import React from 'react';

require('./button.less');

const Button = ({ onButtonClick, children }) => {
  return (
    <div className="app-button">
      <button onClick={onButtonClick}>{children}</button>
    </div>
  );
};

export default Button;
