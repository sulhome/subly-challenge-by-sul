import React from 'react';
import { Form } from 'react-bootstrap';

interface StatusFilterProps {
  selectedStatus: string | null;
  handleStatusChange: (status: string | null) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({
  selectedStatus,
  handleStatusChange,
}) => {
  return (
    <>
      <Form.Label>
        <i className="bi bi-list-task me-2"></i>
        <strong>Medium Status Filter</strong>
      </Form.Label>
      <Form.Select
        aria-label="Filter by status"
        onChange={(e) => handleStatusChange(e.target.value)}
        value={selectedStatus || ''}
        className="w-100 shadow-none"
      >
        <option value="">All Statuses</option>
        <option value="ready">Ready</option>
        <option value="transcribing">Transcribing</option>
        <option value="error">Error</option>
      </Form.Select>
    </>
  );
};

export default StatusFilter;
