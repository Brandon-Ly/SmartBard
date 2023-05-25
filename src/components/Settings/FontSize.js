import React from 'react';
import {Col, Container, Dropdown, DropdownButton, Row} from 'react-bootstrap/';
import '../Interface/Style.css';

export default function FontSize({fontSize, setFontSize}) {

    return (
        <div className='settings-div'>
            <Container>
                <Row>
                    <h5 className='settings-header'>Font Size</h5>
                    <Col>
                        <DropdownButton className='settings-dropdown' title={fontSize}>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(12)}>12</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(14)}>14</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(16)}>16</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(18)}>18</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(20)}>20</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(22)}>22</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(24)}>24</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(26)}>26</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(28)}>28</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(36)}>36</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(48)}>48</div>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <div onClick={() => setFontSize(72)}>72</div>
                            </Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}