import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import { ChromePicker } from 'react-color';
import '../Interface/Style.css';

export default function FontColor({fontColor, setFontColor}) {


    const handleChange = (newColor) => {
        setFontColor(newColor.hex);
      };
    
    return (
        <div className='font-size-description'>
            <Container>
                <Row>
                    <h5 className='font-size-description'>Text Color</h5>
                    <Col>
                        <DropdownButton title='Select Text Color'>
                            <ChromePicker color={fontColor} onChange={handleChange} />
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
