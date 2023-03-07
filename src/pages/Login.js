import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Container, Form, Row} from 'react-bootstrap';
import logo from '../images/overbrook.png';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
    }

    return (
        <div className='Login'>
            <Container>
                <Row>
                    <img src={logo} alt='Overbrook School of the Blind Logo' style={{
                        width: "800px",
                        height: "200px"
                    }}/>
                </Row>

                <Form onSubmit={handleSubmit}>
                    <Form.Group controliD='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controliD='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            autoFocus
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    {/* Button will temporarily just change the URL right now */}
                    <Button style={{cursor: 'pointer'}} variant="warning" onClick={() => navigate('/home')}
                            type='submit'>Login</Button>
                </Form>
            </Container>
        </div>
    )
}