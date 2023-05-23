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
        <div className='theme-setting'>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <DropdownButton title='Select Text Color'>
                            <ChromePicker color={fontColor} onChange={handleChange} />
                        </DropdownButton>
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 className='theme-description'> Adjust Text Color</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
