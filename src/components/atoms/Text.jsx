import React from 'react';
import "../../styles/atoms/text.css";

function Text({ variant = 'p', type = 'body', children, className = '', ...props }) {
  const Component = variant;
  
  const classNames = `text-${type} ${className}`.trim();

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}

export default Text;