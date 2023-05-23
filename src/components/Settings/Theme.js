import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
        <div className='font-size-dropdown'>
            <Container>
                <Row>
                    <h5 className='font-size-dropdown'>Color Theme</h5>
                    <Col>
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
                </Row>
            </Container>
        </div>
    )
}