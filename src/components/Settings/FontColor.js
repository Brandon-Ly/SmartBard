import React from 'react';
import {Col, Container, DropdownButton, Row} from 'react-bootstrap/';
import {ChromePicker} from 'react-color';
import '../Interface/Style.css';

export default function FontColor({fontColor, setFontColor}) {

    const handleChange = (newColor) => {
        setFontColor(newColor.hex);
    };

    return (
        <div className='settings-header'>
            <Container>
                <Row>
                    <h5 className='settings-header'>Text Color</h5>
                    <Col>
                        <DropdownButton title='Select Text Color'>
                            <ChromePicker color={fontColor} onChange={handleChange}/>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
