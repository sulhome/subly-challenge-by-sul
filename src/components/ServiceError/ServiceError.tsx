import React from 'react';
import { Alert } from 'react-bootstrap';

const ServiceError: React.FC = () => {
  return (
    <div
      data-testid="service-error"
      className="error-container text-center my-5"
    >
      <Alert variant="danger">
        <Alert.Heading>Error fetching Data</Alert.Heading>
        <p>There was an issue fetching data. Please try again later.</p>
      </Alert>
    </div>
  );
};

export default ServiceError;
