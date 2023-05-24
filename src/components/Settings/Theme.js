import React from 'react';
import {Col, Container, Dropdown, DropdownButton, Row} from 'react-bootstrap/';
import {Themes} from "./Theme-Context";
import '../Interface/Style.css';

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
        <div className='settings-div'>
            <Container>
                <Row>
                    <h5 className='settings-header'>Color Theme</h5>
                    <Col>
                        <DropdownButton className='settings-dropdown' title="Theme">
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
                </Row>
            </Container>
        </div>
    )
}