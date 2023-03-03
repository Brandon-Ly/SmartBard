import React from 'react';

export default function SpeechVoices() {
    const voices = speechSynthesis.getVoices();

    return (
        <div className='voices-setting'>

        </div>
    )
}