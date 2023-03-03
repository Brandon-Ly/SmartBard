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
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <DropdownButton className='' title='Default'>
                            <Dropdown.Item as="button">
                                <button className='yellowRedButton'
                                        onClick={() => handleTheme('main')}></button>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <button className='purpleBlackButton'
                                        onClick={() => handleTheme('purple')}></button>
                            </Dropdown.Item>
                            <Dropdown.Item as="button">
                                <button className='orangeBlueButton'
                                        onClick={() => handleTheme('orange')}></button>
                            </Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 className='color-theme-description'> Adjust Color Theme</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}