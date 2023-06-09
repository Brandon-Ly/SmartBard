import { render, screen, fireEvent } from '@testing-library/react';
import AdminRequestComp from '../../../components/Admin/AdminRequestComp';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('AdminRequestComp', () => {

    test('Render AdminRequestComp elements', () => {
      const mockNavigate = jest.fn();
      useNavigate.mockReturnValueOnce(mockNavigate);
  
      render(<AdminRequestComp />);
  
      expect(screen.getByText('Announcements')).toBeInTheDocument();
      expect(screen.getByText('Filter')).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Pending' })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Accepted' })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Rejected' })).toBeInTheDocument();

      expect(screen.getByRole('button', { name: 'Create New Request' })).toBeInTheDocument();
    });
  
    test('Click Create New Request Button', () => {
      const mockNavigate = jest.fn();
      useNavigate.mockReturnValueOnce(mockNavigate);
  
      render(<AdminRequestComp />);
  
      const createRequestButton = screen.getByRole('button', { name: 'Create New Request' });
      fireEvent.click(createRequestButton);
  
      expect(mockNavigate).toHaveBeenCalledWith('/create');
    });
});
  