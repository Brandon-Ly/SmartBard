import React from 'react';
import speaker from '../../images/speaker.png'
import "Settings.css"

export default function TextToSpeech({text, setText}) {

    const msg = new SpeechSynthesisUtterance()
    const speechHandler = (msg) => {
        msg.text = text
        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(msg)
    }


    return (
        <div className='text-to-speech-setting'>
            <button className='border border-success float-end' onClick={() => speechHandler(msg)}><img
                className='speaker-logo' src={speaker} alt="speaker button"/></button>
        </div>
    )
}