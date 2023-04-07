import {useNavigate, useParams} from 'react-router-dom';
import {Card, Container, Col, Row, Button, Form} from "react-bootstrap";
import data from '../../data.js';
import "./Request.css";

export default function RequestDetailsComp() {

    const navigate = useNavigate();
    const {postID} = useParams();
    const post = data.find(postInArray => postInArray.id === parseInt(postID));


    return (
        <Container className="request-details-container">
            <Card className="shadow-sm">
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label className="fw-bold">Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue={post.title}
                                readOnly
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBody">
                            <Form.Label className="fw-bold">Body</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                style={{height: "200px"}}
                                defaultValue={post.body}
                                readOnly
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFile" xs="auto">
                            <Form.Label className="fw-bold">Media</Form.Label>
                            <Row xs="auto">
                                <Col>
                                    <Form.Control type="file" readOnly/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DateRange">
                            <Form.Label className="fw-bold">Date Range</Form.Label>
                            <Row xs="auto" className="align-items-center">
                                <Col>
                                    <Form.Control required type="text"
                                                  value={post.fromdate.substring(0, 10)}
                                                  readOnly/>
                                </Col>
                                <Col>To</Col>
                                <Col>
                                    <Form.Control required type="text"
                                                  value={post.todate.substring(0, 10)}
                                                  readOnly/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Row className="float-end">
                                <Col>
                                    <Button variant="primary" onClick={() => {
                                        navigate(-1)
                                    }}>
                                        Return
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