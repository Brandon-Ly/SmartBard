import {useNavigate} from "react-router-dom";
import {Card, Container, Tab, Tabs, Col, Row, Button} from 'react-bootstrap';
import RequestTable from "./RequestTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Request.css";

export default function RequestComp() {

    const navigate = useNavigate();
    const handleCreateRequest = function () {
        navigate('/create');
    }


    return (
        <Container className="request-container">
            <Card className="shadow-sm">
                <Card.Body>
                    <Row>
                        <div>
                            <h2>Your Requests</h2>
                        </div>
                    </Row>
                    <Row className="request-row">
                        <Tabs defaultActiveKey="pending" id="table-tabs" className="mb-3">
                            <Tab eventKey="pending" title="Pending">
                                <RequestTable status="requested"/>
                            </Tab>
                            <Tab eventKey="accepted" title="Accepted">
                                <RequestTable status="approved"/>
                            </Tab>
                            <Tab eventKey="rejected" title="Rejected">
                                <RequestTable status="rejected"/>
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