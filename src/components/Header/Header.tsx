import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import './Header.css';
import LanguageFilter from '../LanguageFilter/LanguageFilter';
import StatusFilter from '../StatusFilter/StatusFilter';

interface HeaderProps {
  selectedStatus: string | null;
  selectedLanguage: string | null;
  handleStatusChange: (status: string | null) => void;
  handleLanguageChange: (selectedLanguage: string | null) => void;
  availableLanguages: string[];
}

const Header: React.FC<HeaderProps> = ({
  selectedStatus,
  selectedLanguage,
  handleStatusChange,
  handleLanguageChange,
  availableLanguages,
}) => {
  return (
    <div className="header-container">
      <Container>
        <Title />
        <Row className="align-items-center">
          <Col xs={12} sm={6} md={4}>
            <StatusFilter
              selectedStatus={selectedStatus}
              handleStatusChange={handleStatusChange}
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <LanguageFilter
              selectedLanguage={selectedLanguage}
              handleLanguageChange={handleLanguageChange}
              availableLanguages={availableLanguages}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
