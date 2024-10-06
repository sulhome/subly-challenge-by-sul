import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StatusFilter from './StatusFilter';

const mockHandleStatusChange = jest.fn();

describe('StatusFilter Component', () => {
  const defaultProps = {
    selectedStatus: '',
    handleStatusChange: mockHandleStatusChange,
  };

  beforeEach(() => {
    mockHandleStatusChange.mockClear();
  });

  it('should render the status filter with all options', () => {
    render(<StatusFilter {...defaultProps} />);

    expect(screen.getByLabelText('Filter by status')).toBeInTheDocument();
    expect(screen.getByText('All Statuses')).toBeInTheDocument();
    expect(screen.getByText('Ready')).toBeInTheDocument();
    expect(screen.getByText('Transcribing')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('should call handleStatusChange when a status is selected', () => {
    render(<StatusFilter {...defaultProps} />);

    const statusSelect = screen.getByLabelText('Filter by status');
    fireEvent.change(statusSelect, { target: { value: 'ready' } });

    expect(mockHandleStatusChange).toHaveBeenCalledTimes(1);
    expect(mockHandleStatusChange).toHaveBeenCalledWith('ready');
  });

  it('should set the correct value in the dropdown when a status is selected', () => {
    render(<StatusFilter {...defaultProps} selectedStatus="transcribing" />);

    const statusSelect = screen.getByLabelText(
      'Filter by status'
    ) as HTMLSelectElement;
    expect(statusSelect.value).toBe('transcribing');
  });
});
