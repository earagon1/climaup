import React from 'react';
import '../styles/container.css';

const Container = ({ children }) => {
  return (
    <div className="custom-container">
      {children}
    </div>
  );
};

export default Container;