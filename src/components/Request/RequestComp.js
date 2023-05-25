import {useState} from "react";
import {useNavigate} from "react-router-dom";
import RequestTable from "./RequestTable";
import {Button, Card, Col, Container, Dropdown, Form, Row, Tab, Tabs} from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Interface/Style.css";

export default function RequestComp() {

    const navigate = useNavigate();
    const handleCreateRequest = function () {
        navigate("/create");
    };

    const [formData, setFormData] = useState({
        title: "",
        datefrom: "",
        dateto: "",
        priority: false,
    });

    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData({...formData, [inputName]: inputValue});
        console.log(formData)
    };

    return (
        <Container className="request-container">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title className="fw-bold">
                        <div class="d-flex justify-content-between">
                            Announcements
                            <Dropdown>
                                <Dropdown.Toggle variant="warning" id='filter-button' >Filter</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Container>
                                        <Row style={{minWidth: "30vw"}}>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="form-title">
                                                    <Form.Label className="fw-bold">Title</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="title"
                                                        placeholder="Request title"
                                                        value={formData.title || ""}
                                                        onChange={handleInputChange}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="date-range">
                                                    <Form.Label className="fw-bold">
                                                        Date Range
                                                    </Form.Label>
                                                    <Row xs="auto" className="align-items-center">
                                                        <Col>
                                                            <Form.Control
                                                                type="date"
                                                                name="datefrom"
                                                                value={formData.datefrom || ""}
                                                                onChange={handleInputChange}
                                                            />
                                                        </Col>
                                                        <Col>To</Col>
                                                        <Col>
                                                            <Form.Control
                                                                type="date"
                                                                name="dateto"
                                                                value={formData.dateto || ""}
                                                                onChange={handleInputChange}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Check
                                                        type="checkbox"
                                                        label='Priority'
                                                        name='priority'
                                                        checked={formData.priority}
                                                        onChange={handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Row>
                                    </Container>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Title>
                    <Row className="request-row">
                        <Tabs defaultActiveKey="pending" id="table-tabs" className="mb-3">
                            <Tab eventKey="pending" title="Pending">
                                <RequestTable status="requested" filteredObject={formData}/>
                            </Tab>
                            <Tab eventKey="accepted" title="Accepted">
                                <RequestTable status="approved" filteredObject={formData}/>
                            </Tab>
                            <Tab eventKey="rejected" title="Rejected">
                                <RequestTable status="denied" filteredObject={formData}/>
                            </Tab>
                        </Tabs>
                    </Row>
                    <Row className="float-end">
                        <Col>
                            <Button id='create-request-button' onClick={handleCreateRequest}>Create New Request</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}