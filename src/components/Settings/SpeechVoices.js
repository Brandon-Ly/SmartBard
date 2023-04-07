import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './Settings.css';

export default function SpeechVoices() {

    const voices = speechSynthesis.getVoices();


    return (
        <div className='speech-voices-setting'>
            <Container>
                <Row>
                    <Col xs={6} md={4}>

                    </Col>
                    <Col xs={12} md={8}>
                        <h5 className='speech-voices-description'> Adjust Speech Voice</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}