import { render, screen, fireEvent } from '@testing-library/react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../../components/Interface/NavBar';
import ThemeContext from "../../../components/Settings/Theme-Context";
import { AuthContext } from '../../../components/Authentication/AuthContext';
import axios from "axios";
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));
jest.mock('axios');

describe('NavBar', () => {
  const mockLocation = { pathname: '/home' };
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useLocation.mockReturnValue(mockLocation);
    useNavigate.mockReturnValue(mockNavigate);
  });

//   test('Render Admin Navbar', () => {
//     render(<NavBar />);

//     const adminButton = screen.getByRole('button', { name: 'Admin' });
//     const logoutButton = screen.getByRole('button', { name: 'Logout' });

//     expect(adminButton).toBeInTheDocument();
//     expect(logoutButton).toBeInTheDocument();
//   });

  test('Render Student Navbar', () => {
    render(<NavBar />);

    const requestButton = screen.getByRole('button', { name: 'Request' });
    const logoutButton = screen.getByRole('button', { name: 'Logout' });

    expect(requestButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });
});
