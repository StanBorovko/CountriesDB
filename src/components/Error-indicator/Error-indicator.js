import React from 'react';

import './style.css';
import icon from './error.svg';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">Error!</span>
      <span>
        something has gone terribly wrong
      </span>
    </div>
  );
};

export default ErrorIndicator;
