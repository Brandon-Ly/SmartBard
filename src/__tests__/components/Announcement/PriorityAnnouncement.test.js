import PriorityAnnouncement from '../../../components/Announcement/PriorityAnnouncement';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('PriorityAnnouncement', () => {
  const mockPriorityPost = {
    announcementid: 1,
    title: 'Priority Announcement',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    media: 'https://example.com/image.jpg',
  };

  beforeEach(() => {
    render(<PriorityAnnouncement priorityPost={mockPriorityPost} />);
  });

  test('Render PriorityAnnouncement', () => {
    const title = screen.getByRole('heading', { name: 'Priority Announcement' });
    const body = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    const image = screen.getByAltText('preview image of priority announcement');

    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test('does not render anything if priority post is not provided', () => {
    render(<PriorityAnnouncement priorityPost={null} />);
    const container = screen.queryByRole('article', { name: 'Priority Announcement' });

    expect(container).not.toBeInTheDocument();
  });
});
