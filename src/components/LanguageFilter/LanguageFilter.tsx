import React from 'react';
import { Form } from 'react-bootstrap';

interface LanguageFilterProps {
  selectedLanguage: string | null;
  handleLanguageChange: (selectedLanguage: string | null) => void;
  availableLanguages: string[];
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({
  selectedLanguage,
  handleLanguageChange,
  availableLanguages,
}) => {
  return (
    <>
      <Form.Label>
        <i className="bi bi-translate me-2"></i>
        <strong>Medium Language Filter</strong>
      </Form.Label>
      <Form.Select
        aria-label="Filter by language"
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={selectedLanguage || ''}
        className="w-100 shadow-none"
      >
        <option value="">All Languages</option>
        {availableLanguages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default LanguageFilter;
