import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Settings.css';

export default function Font() {
    const [font, setFont] = useState("Arial");

    return (
        <div className='fontName'>
            <h2>Font</h2>
            <DropdownButton className="fontDropdown" title={font}>
                <Dropdown.Item as="button"><div onClick={() => setFont('Arial')}>Arial</div></Dropdown.Item>
                <Dropdown.Item as="button"><div onClick={() => setFont('Calibri')}>Calibri</div></Dropdown.Item>
                <Dropdown.Item as="button"><div onClick={() => setFont('Times New Roman')}>Times New Roman</div></Dropdown.Item>
            </DropdownButton>
        </div>
    )
}