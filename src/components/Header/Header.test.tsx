import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

const mockHandleStatusChange = jest.fn();
const mockHandleLanguageChange = jest.fn();

describe('Header Component', () => {
  const defaultProps = {
    selectedStatus: null,
    selectedLanguage: null,
    handleStatusChange: mockHandleStatusChange,
    handleLanguageChange: mockHandleLanguageChange,
    availableLanguages: ['en', 'fr', 'es'],
  };

  beforeEach(() => {
    mockHandleStatusChange.mockClear();
    mockHandleLanguageChange.mockClear();
  });

  it('should render Title, StatusFilter, and LanguageFilter components', () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByTestId('page-title')).toHaveTextContent(
      /Subly Challenge implemented with/i
    );
    expect(screen.getByLabelText('Filter by status')).toBeInTheDocument();
    expect(screen.getByLabelText('Filter by language')).toBeInTheDocument();
  });

  it('should call handleStatusChange when status is selected', () => {
    render(<Header {...defaultProps} />);

    const statusFilter = screen.getByLabelText('Filter by status');
    fireEvent.change(statusFilter, { target: { value: 'ready' } });

    expect(mockHandleStatusChange).toHaveBeenCalledWith('ready');
  });

  it('should call handleLanguageChange when language is selected', () => {
    render(<Header {...defaultProps} />);

    const languageFilter = screen.getByLabelText('Filter by language');
    fireEvent.change(languageFilter, { target: { value: 'fr' } });
    expect(mockHandleLanguageChange).toHaveBeenCalledWith('fr');
  });
});
