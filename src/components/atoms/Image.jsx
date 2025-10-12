import React from 'react';
import "../../styles/atoms/image.css";

function Image({ src, alt, className = '', ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`custom-image ${className}`}
      {...props}
    />
  );
}

export default Image;