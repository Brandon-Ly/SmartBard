import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Settings.css';

export default function FontSize() {
    const [fontSize, setFontSize] = useState(18);

    return (
        <div className='fontSize'>
            <h2>FontSize</h2>
           <DropdownButton className='fontSizeDropdown' title={fontSize}>
               <Dropdown.Item as="button"><div onClick={() => setFontSize(12)}>12</div></Dropdown.Item>
               <Dropdown.Item as="button"><div onClick={() => setFontSize(14)}>14</div></Dropdown.Item>
               <Dropdown.Item as="button"><div onClick={() => setFontSize(16)}>16</div></Dropdown.Item>
               <Dropdown.Item as="button"><div onClick={() => setFontSize(18)}>18</div></Dropdown.Item>
               <Dropdown.Item as="button"><div onClick={() => setFontSize(20)}>20</div></Dropdown.Item>
               <Dropdown.Item as="button"><div onClick={() => setFontSize(22)}>22</div></Dropdown.Item>
               <Dropdown.Item as="button"><div onClick={() => setFontSize(24)}>24</div></Dropdown.Item>
               <Dropdown.Item as="button"><div onClick={() => setFontSize(26)}>26</div></Dropdown.Item>
               <Dropdown.Item as="button"><div onClick={() => setFontSize(28)}>28</div></Dropdown.Item>
               <Dropdown.Item as="button"><div onClick={() => setFontSize(30)}>30</div></Dropdown.Item>
           </DropdownButton>
        </div>
    )
}