import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery } from '@tanstack/react-query';
import App from './App';
import { CardStatus } from './enums/cardStatus.enum';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

describe('App Component', () => {
  it('should render the loading indicator when data is loading', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      isError: false,
    });

    render(<App />);

    const loadingElement = screen.getByTestId('loading-indicator');
    expect(loadingElement).toBeInTheDocument();
  });

  it('should render the error component when there is an error', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      isError: true,
    });

    render(<App />);

    const errorElement = screen.getByTestId('service-error');
    expect(errorElement).toBeInTheDocument();
  });

  it('should render the ReadyCard when media status is ready', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [
        {
          id: '1',
          name: 'Media 1',
          cover: 'media1.jpg',
          updatedAt: '2024-01-01T00:00:00Z',
          languages: ['en', 'fr'],
          status: CardStatus.Ready,
        },
      ],
      isLoading: false,
      isError: false,
    });

    render(<App />);

    const readyCard = screen.getByTestId('ready-card');
    expect(readyCard).toBeInTheDocument();
  });

  it('should render the TranscribingCard when media status is transcribing', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [
        {
          id: '2',
          name: 'Media 2',
          cover: 'media2.jpg',
          updatedAt: '2024-01-02T00:00:00Z',
          languages: ['en'],
          status: CardStatus.Transcribing,
        },
      ],
      isLoading: false,
      isError: false,
    });

    render(<App />);

    const transcribingCard = screen.getByTestId('transcribing-card');
    expect(transcribingCard).toBeInTheDocument();
  });

  it('should render the ErrorCard when media status is error', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [
        {
          id: '3',
          name: 'Media 3',
          cover: 'media3.jpg',
          updatedAt: '2024-01-03T00:00:00Z',
          languages: ['en'],
          status: CardStatus.Error,
          errorMessage: 'Failed to process media',
        },
      ],
      isLoading: false,
      isError: false,
    });

    render(<App />);

    const errorCard = screen.getByTestId('error-card');
    expect(errorCard).toBeInTheDocument();

    const errorMessage = screen.getByText('Failed to process media');
    expect(errorMessage).toBeInTheDocument();
  });
});
