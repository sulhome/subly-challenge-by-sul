import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageFilter from './LanguageFilter';

const mockHandleLanguageChange = jest.fn();

describe('LanguageFilter Component', () => {
  const defaultProps = {
    selectedLanguage: '',
    handleLanguageChange: mockHandleLanguageChange,
    availableLanguages: ['en', 'fr', 'es'],
  };

  beforeEach(() => {
    mockHandleLanguageChange.mockClear();
  });

  it('should render the language filter with all options', () => {
    render(<LanguageFilter {...defaultProps} />);

    expect(screen.getByLabelText('Filter by language')).toBeInTheDocument();
    expect(screen.getByText('All Languages')).toBeInTheDocument();
    expect(screen.getByText('en')).toBeInTheDocument();
    expect(screen.getByText('fr')).toBeInTheDocument();
    expect(screen.getByText('es')).toBeInTheDocument();
  });

  it('should call handleLanguageChange when a language is selected', () => {
    render(<LanguageFilter {...defaultProps} />);

    const languageSelect = screen.getByLabelText('Filter by language');
    fireEvent.change(languageSelect, { target: { value: 'fr' } });

    expect(mockHandleLanguageChange).toHaveBeenCalledTimes(1);
    expect(mockHandleLanguageChange).toHaveBeenCalledWith('fr');
  });

  it('should set the correct value in the dropdown when a language is selected', () => {
    render(<LanguageFilter {...defaultProps} selectedLanguage="es" />);

    const languageSelect = screen.getByLabelText(
      'Filter by language'
    ) as HTMLSelectElement;
    expect(languageSelect.value).toBe('es');
  });
});
