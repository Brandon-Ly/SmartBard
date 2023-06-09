import { render, screen } from '@testing-library/react';
import Announcements from '../../../components/Announcement/Announcements';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Announcements', () => {
    
  const mockData = [
    {
      announcementid: 1,
      title: 'Announcement 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      media: 'https://example.com/image1.jpg',
    },
    {
      announcementid: 2,
      title: 'Announcement 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      media: 'https://example.com/image2.jpg',
    },
  ];

  beforeEach(() => {
    render(<Announcements data={mockData} />);
  });

  test('Render announcement carousel', () => {

  });

  test('Double click on an announcement', () => {
    const navigate = useNavigate();

  });
});
