import React from 'react';
import ReactSlider from "react-slider";
import './Settings.css';

export default function Slider() {

    return (
        <div>
            <div className='contrastSlider'>
                <h2>Contrast</h2>
                <ReactSlider
                    className="slider"
                    thumbClassName="customSlider-thumb"
                    trackClassName="customSlider-track"
                />
            </div>
            <div className='volumeSlider'>
                <h2>Volume</h2>
                <ReactSlider
                    className="slider"
                    thumbClassName="customSlider-thumb"
                    trackClassName="customSlider-track"
                />
            </div>
            <div className='delaySlider'>
                <h2>Delay</h2>
                <ReactSlider
                    className="slider"
                    thumbClassName="customSlider-thumb"
                    trackClassName="customSlider-track"
                />
            </div>
        </div>
    )
}