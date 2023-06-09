import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminRequestTable from '../../../components/Admin/AdminRequestTable';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('AdminRequestTable', () => {
  test('Render AdminRequestTable elements', async () => {
    const mockRequests = [
      { title: 'Request 1', announcementid: 1 },
      { title: 'Request 2', announcementid: 2 },
    ];

    axios.get.mockResolvedValueOnce({ data: mockRequests });

    render(
      <Router>
        <AdminRequestTable filteredObject={{}} status="requested" />
      </Router>
    );

    // Validate table rows
  });
});
