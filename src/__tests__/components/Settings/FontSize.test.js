import FontSize from '../../../components/Settings/FontSize';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('FontSize', () => {
  test('Render FontSize', () => {
    const mockSetFontSize = jest.fn();

    render(<FontSize fontSize={16} setFontSize={mockSetFontSize} />);

    const fontSizeButton = screen.getByRole('button', { fontSize: '16' });

    expect(fontSizeButton).toBeInTheDocument();
  });
});

