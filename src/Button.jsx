import React from 'react';

export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      style={{
        padding: '10px 20px',
        borderRadius: '6px',
        background: '#4f46e5',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
