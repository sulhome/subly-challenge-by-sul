import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import ReadyCard from './components/ReadyCard/ReadyCard';
import TranscribingCard from './components/TranscribingCard/TranscribingCard';
import ErrorCard from './components/ErrorCard/ErrorCard';
import Header from './components/Header/Header';
import Medium from './model/medium.interface';
import ErrorMedium from './model/errorMedium.interface';
import { CardStatus } from './enums/cardStatus.enum';
import { fetchMedia } from './services/mediaService';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
import ServiceError from './components/ServiceError/ServiceError';
import { getAvailableLanguages, getFilteredMedia } from './utils/mediaUtils';

const App: React.FC = () => {
  const {
    data: media = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['media'],
    queryFn: fetchMedia,
  });

  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleStatusChange = (status: string | null) => {
    setSelectedStatus(status);
  };

  const handleLanguageChange = (selectedLanguage: string | null) => {
    setSelectedLanguage(selectedLanguage);
  };

  // Get unique languages from languages ddl
  const availableLanguages = getAvailableLanguages(media);

  // filter data based on user language and status selections
  const filteredMedia = getFilteredMedia(
    media,
    selectedStatus,
    selectedLanguage
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ServiceError />;
  }

  return (
    <>
      <Header
        selectedStatus={selectedStatus}
        selectedLanguage={selectedLanguage}
        handleStatusChange={handleStatusChange}
        handleLanguageChange={handleLanguageChange}
        availableLanguages={availableLanguages}
      />

      <Container>
        <Row>
          {filteredMedia.map((medium: Medium | ErrorMedium) => (
            <Col md={4} key={medium.id}>
              {medium.status === CardStatus.Ready && (
                <ReadyCard
                  name={medium.name}
                  cover={medium.cover}
                  updatedAt={medium.updatedAt}
                  languages={medium.languages}
                />
              )}
              {medium.status === CardStatus.Transcribing && (
                <TranscribingCard name={medium.name} cover={medium.cover} />
              )}
              {medium.status === CardStatus.Error && (
                <ErrorCard
                  name={medium.name}
                  errorMessage={(medium as ErrorMedium).errorMessage}
                />
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
