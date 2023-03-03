import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../Interface/Style.css';

export default function SpeechVoices() {
    const voices = speechSynthesis.getVoices();

    return (
        <div className='voices-setting'>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 className='voices-description'> Adjust Speech Voice</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}