import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import AdminRequestTable from "./AdminRequestTable";
import { useNavigate } from "react-router-dom";
import "../Interface/Style.css"

export default function RequestComp() {

    const navigate = useNavigate();
    const handleCreateRequest = function () {
        navigate('/create');
    }


    return (
        <Container className="priority-announcement">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title className="fw-bold">
                        <div class="d-flex justify-content-between">
                            Announcements
                            <Dropdown>
                                <Dropdown.Toggle variant="warning">Filter</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Container>
                                        <Row style={{ minWidth: "25vw" }}>
                                            <div>hi</div>
                                            <div>hi</div>
                                            <div>hi</div>
                                            <div>hi</div>
                                            <div>hi</div>
                                        </Row>
                                    </Container>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Title>
                    <Row className="formGroup">
                        <Tabs defaultActiveKey="pending" id="table-tabs" className="mb-3">
                            <Tab eventKey="pending" title="Pending">
                                <AdminRequestTable status="requested" />
                            </Tab>
                            <Tab eventKey="accepted" title="Accepted">
                                <AdminRequestTable status="approved" />
                            </Tab>
                            <Tab eventKey="rejected" title="Rejected">
                                <AdminRequestTable status="denied" />
                            </Tab>
                        </Tabs>
                    </Row>
                    <Row className="float-end">
                        <Col>
                            <Button onClick={handleCreateRequest}>Create New Request</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}