import React from 'react';
import "../../styles/atoms/button.css";

function Button({ children, className = '', variant = 'primary', ...props }) {
  return (
    <button className={`btn-custom btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;