import React from 'react';

const ReusableCard = ({ title, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', margin: '10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ReusableCard;
