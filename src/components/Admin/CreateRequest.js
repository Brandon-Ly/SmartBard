import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../Interface/Style.css";

export default function CreateRequest() {
    return (
        <Container className="priority-announcement">
            <Card className="shadow-sm">
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label className="fw-bold">Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter post title"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBody">
                            <Form.Label className="fw-bold">Body</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                style={{height: "200px"}}
                                placeholder="Enter post body"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFile" xs="auto">
                            <Form.Label className="fw-bold">Media</Form.Label>
                            <Row xs="auto">
                                <Col>
                                    <Form.Control type="file"/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DateRange">
                            <Form.Label className="fw-bold">Date Range</Form.Label>
                            <Row xs="auto" className="align-items-center">
                                <Col>
                                    <Form.Control required type="date"/>
                                </Col>
                                <Col>To</Col>
                                <Col>
                                    <Form.Control required type="date"/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Row className="float-end">
                                <Col>
                                    <Button variant="primary" type="submit">
                                        create
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
