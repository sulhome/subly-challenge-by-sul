import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ReadyCard.css';
import { formatDistanceToNow } from 'date-fns';

interface ReadyCardProps {
  name: string;
  cover: string;
  updatedAt: string;
  languages: string[];
}

const ReadyCard: React.FC<ReadyCardProps> = ({
  name,
  cover,
  updatedAt,
  languages,
}) => {
  return (
    <Card data-testid="ready-card" className="mb-4 ready-card">
      <div className="cover-container">
        <Card.Img
          variant="top"
          src={cover}
          style={{ height: '150px', objectFit: 'cover' }}
        />

        <div className="hover-overlay">
          <div className="languages-container">
            <div className="icon-container">
              <i className="bi bi-translate text-white"></i>
            </div>
            <div className="languages-text">
              {languages.length}{' '}
              {languages.length > 1 ? 'languages' : 'language'}
            </div>
          </div>
          <div className="name-overlay">{name}</div>
          <Button variant="outline-light" className="edit-button">
            Edit
          </Button>

          <button className="delete-button">
            <i className="bi bi-trash delete-icon"></i>
          </button>
        </div>
      </div>

      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Text className="text-muted">
          Edited {formatDistanceToNow(new Date(updatedAt), { addSuffix: true })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReadyCard;
