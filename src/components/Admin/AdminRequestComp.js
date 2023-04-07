import {useNavigate} from "react-router-dom";
import {Button, Card, Col, Container, Row, Tab, Tabs} from 'react-bootstrap'
import AdminRequestTable from "./AdminRequestTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";

export default function RequestComp() {

    const navigate = useNavigate();
    const handleCreateRequest = function () {
        navigate('/create');
    }


    return (
        <Container className="admin-request-container">
            <Card className="shadow-sm">
                <Card.Body>
                    <Row>
                        <div>
                            <h2>Announcements</h2>
                        </div>
                    </Row>
                    <Row className="admin-request-row">
                        <Tabs defaultActiveKey="pending" id="table-tabs" className="mb-3">
                            <Tab eventKey="pending" title="Pending">
                                <AdminRequestTable status="requested"/>
                            </Tab>
                            <Tab eventKey="accepted" title="Accepted">
                                <AdminRequestTable status="approved"/>
                            </Tab>
                            <Tab eventKey="rejected" title="Rejected">
                                <AdminRequestTable status="denied"/>
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