import React from 'react';
import './Title.css';

const Title: React.FC = () => {
  return (
    <h1 data-testid="page-title" className="text-start mb-4">
      <span className="text-white">Subly</span> Challenge implemented with
      <i className="bi bi-heart-fill ms-2 me-2 heart-icon"></i>
      by <span className="text-white">Sul Aga</span>
    </h1>
  );
};

export default Title;
