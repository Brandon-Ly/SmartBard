import React from 'react';
import AdminRequestDetailsComp from '../../../components/Admin/AdminRequestDetailsComp';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';
import axios from 'axios';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('AdminRequestDetailsComp', () => {

  const mockData = [
    {
      announcementid: 1,
      title: 'Test Title',
      body: 'Test Body',
      media: 'test.jpg',
      datefrom: '2023-05-16',
      dateto: '2023-05-20',
      priority: false,
    },
  ];
  
  const mockProps = {
    data: mockData,
    postID: '1',
    status: 'requested',
  };

  beforeEach(() => {
    axios.put.mockResolvedValue({ data: {} });
    useNavigate.mockReturnValue(jest.fn());
    localStorage.setItem('id_token', 'mock-token');
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('Render AdminRequestDetailsComp elements', () => {
    render(<AdminRequestDetailsComp {...mockProps} />);

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Title')).toHaveValue('Test Title');

    expect(screen.getByLabelText('Body')).toBeInTheDocument();
    expect(screen.getByLabelText('Body')).toHaveValue('Test Body');

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test.jpg');

    expect(screen.getByLabelText('Date Range')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Accept' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reject' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Return' })).toBeInTheDocument();

  });

  test('Click on the Accept Button', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValueOnce(mockNavigate);

    render(<AdminRequestDetailsComp {...mockProps} />);

    const acceptButton = screen.getByRole('button', { name: 'Accept' });
    fireEvent.click(acceptButton);

    // expect(mockNavigate).toHaveBeenCalledWith('/admin');

  });

  test('Click on the Reject Button', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValueOnce(mockNavigate);

    render(<AdminRequestDetailsComp {...mockProps} />);

    const acceptButton = screen.getByRole('button', { name: 'Reject' });
    fireEvent.click(acceptButton);

    // expect(mockNavigate).toHaveBeenCalledWith('/admin');

  });

  test('Click on the Return Button', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValueOnce(mockNavigate);

    render(<AdminRequestDetailsComp {...mockProps} />);

    const acceptButton = screen.getByRole('button', { name: 'Return' });
    fireEvent.click(acceptButton);

    // expect(mockNavigate).toHaveBeenCalledWith('/home');

  });
});