import React from 'react';
import {Dropdown, DropdownButton, Container, Col, Row} from 'react-bootstrap';
import {Themes} from "./Theme-Context";
import './Settings.css';

export default function UserTheme({theme, setTheme}) {

    function handleTheme(color) {
        switch (color) {
            case 'main':
                setTheme(Themes.main);
                localStorage.setItem('theme', JSON.stringify(Themes.main));
                break;
            case 'purple':
                setTheme(Themes.purple);
                localStorage.setItem('theme', JSON.stringify(Themes.purple));
                break;
            case 'orange':
                setTheme(Themes.orange);
                localStorage.setItem('theme', JSON.stringify(Themes.orange));
                break;
            default:
                break;
        }
    }


    return (
        <div className='theme-setting'>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <DropdownButton className='theme-dropdown' title="Theme">
                            <Dropdown.Item as="button">
                                <button className='yellow-red-button'
                                        onClick={() => handleTheme('main')}></button>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <button className='purple-black-button'
                                        onClick={() => handleTheme('purple')}></button>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <button className='orange-blue-button'
                                        onClick={() => handleTheme('orange')}></button>
                            </Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 className='theme-description'> Adjust Color Theme</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}