import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Interface/Style.css";
import axios from 'axios';
import {API_URL} from "../../common/constants";

export default function RequestCreate() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        "priority": false
      });
    
      const handleInputChange = (event) => {
        setFormData((prevState) => (
          {...prevState,
          [event.target.name]: event.target.value}
        ))
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
        //POST request
        console.log(formData);
        formData.media = ''; // temporary until file upload is done
        axios.post(`${API_URL}/announcements`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('id_token')}`,
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        })
        navigate(-1);
      };

    return (
        <Container className="priority-announcement">
            <Card className="shadow-sm">
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label className="fw-bold">Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="title"
                                placeholder="Enter post title"
                                value={formData.title || ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBody">
                            <Form.Label className="fw-bold">Body</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                name="body"
                                style={{height: "200px"}}
                                placeholder="Enter post body"
                                value={formData.body || ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFile" xs="auto">
                            <Form.Label className="fw-bold">Media</Form.Label>
                            <Row xs="auto">
                                <Col>
                                    <Form.Control type="file"
                                    />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DateRange">
                            <Form.Label className="fw-bold">Date Range</Form.Label>
                            <Row xs="auto" className="align-items-center">
                                <Col>
                                    <Form.Control required 
                                    type="date"
                                    name="datefrom"
                                    placeholder="Date from"
                                    value={formData.datefrom || ''}
                                    onChange={handleInputChange}/>
                                </Col>
                                <Col>To</Col>
                                <Col>
                                    <Form.Control required 
                                    type="date"
                                    name="dateto"
                                    placeholder="Date to"
                                    value={formData.dateto || ''}
                                    onChange={handleInputChange}/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Row className="float-end">
                                <Col>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
