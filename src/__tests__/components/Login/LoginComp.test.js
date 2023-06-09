import LoginComp from '../../../components/Login/LoginComp';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('LoginComp', () => {

  test('Render Login component', () => {
    render(<LoginComp />);

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });
});
