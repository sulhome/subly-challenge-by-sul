import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ErrorCard.css';

interface ErrorCardProps {
  name: string;
  errorMessage: string;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ name, errorMessage }) => {
  return (
    <Card data-testid="error-card" className="mb-4">
      <div className="error-container">
        <div className="d-flex align-items-start">
          <i
            className="bi bi-exclamation-circle text-danger me-3"
            style={{ fontSize: '1.5rem' }}
          ></i>
          <div>
            <p className="mb-1">
              An error occurred while processing your file.
            </p>
            <p className="mb-1">
              Delete file to try again, and report issue if the problem
              persists.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <Button variant="secondary" className="me-2">
            Delete file
          </Button>
          <Button variant="primary">Report issue</Button>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Text className="text-muted">{errorMessage}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ErrorCard;
