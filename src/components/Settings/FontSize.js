import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../Navbar/Style.css';

export default function FontSize({fontSize, setFontSize}) {

    return (
        <div className='font-size-setting'>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <DropdownButton className='font-size-dropdown' title={fontSize}>
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
                    <Col xs={12} md={8}>
                        <h5 className='font-size-description'> Adjust Font Size</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}