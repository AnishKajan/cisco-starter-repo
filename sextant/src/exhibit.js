import React from 'react';

function Exhibit({ heading, children }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '20px', padding: '15px', borderRadius: '8px' }}>
      <h2>{heading}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Exhibit;
