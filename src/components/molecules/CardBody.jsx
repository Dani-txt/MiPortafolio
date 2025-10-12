import React from 'react';
import Text from '../atoms/Text';
import '../../styles/molecules/CardBody.css';

function CardBody({ title, description, className = '' }) {
  return (
    <div className={`card-body-content ${className}`}>
      <Text variant="h5" type="title" className="card-title">
        {title}
      </Text>
      <Text variant="p" type="body" className="card-description">
        {description}
      </Text>
    </div>
  );
}

export default CardBody;