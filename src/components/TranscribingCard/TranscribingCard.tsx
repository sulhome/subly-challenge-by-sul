import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import './TranscribingCard.css';

interface TranscribingCardProps {
  name: string;
  cover: string;
}

const TranscribingCard: React.FC<TranscribingCardProps> = ({ name, cover }) => {
  return (
    <Card data-testid="transcribing-card" className="mb-4">
      <div className="cover-container">
        <Card.Img
          variant="top"
          src={cover}
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <div className="overlay">
          <div className="overlay-content">
            <h5 className="title">Transcribing Subtitles</h5>
            <p className="subtitle">{name}</p>
            <ProgressBar
              striped
              animated
              now={100}
              className="loading-bar"
              style={{ height: '8px' }}
            />
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title>This is transcribing</Card.Title>
        <Card.Text className="text-muted">Transcribing</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TranscribingCard;
