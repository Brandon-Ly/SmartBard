import React, { useState } from 'react';
import  { Form, Button, Container, Row} from 'react-bootstrap';
import logo from '../images/overbrook.png';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) { }

    return (
        <div className='Login'>

            <Container>

            <Row>
                <img src={logo} alt='Overbrook School of the Blind Logo' style={{width: "800px",
            height: "200px"}} />
            </Row>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlID='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        autoFocus 
                        type='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlID='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        autoFocus 
                        type='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </Form.Group>

                {/* Button will temporarily just change the URL right now */}
                <Button variant="warning" href="/home" type='submit'>Login</Button>
            </Form>
            </Container>
        </div>
    )
}