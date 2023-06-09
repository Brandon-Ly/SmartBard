import TextToSpeech from '../../../components/Settings/TextToSpeech';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('TextToSpeech', () => {

  test('Render TextToSpeech', () => {
    const mockSpeechHandler = jest.fn();
    window.speechSynthesis = {
      cancel: jest.fn(),
      speak: jest.fn()
    };
    
    render(<TextToSpeech text="Hello" setText={jest.fn()} />);

    const speakerButton = screen.getByRole('button', { text: 'Hello' });

    expect(speakerButton).toBeInTheDocument();
  });
});
