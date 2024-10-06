import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingIndicator: React.FC = () => {
  return (
    <div
      data-testid="loading-indicator"
      className="loading-container text-center my-5"
    >
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="mt-3">Loading data, please wait...</p>
    </div>
  );
};

export default LoadingIndicator;
