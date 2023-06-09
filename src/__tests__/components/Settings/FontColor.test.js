import { render, screen } from '@testing-library/react';
import FontColor from '../../../components/Settings/FontColor';
import '@testing-library/jest-dom';

describe('FontColor', () => {
  test('Render Font Color Picker', () => {
    const mockSetFontColor = jest.fn();

    render(<FontColor fontColor="#000000" setFontColor={mockSetFontColor} />);

    const colorPickerButton = screen.getByRole('button', { name: 'Select Text Color' });

    expect(colorPickerButton).toBeInTheDocument();
  });
});
