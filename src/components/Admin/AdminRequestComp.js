import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import AdminRequestTable from "./AdminRequestTable";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Interface/Style.css";

export default function RequestComp() {

    const navigate = useNavigate();
    const handleCreateRequest = function () {
        navigate('/create');
    }


    return (
        <Container className="priority-announcement">
            <Card className="shadow-sm">
                <Card.Body>
                    <Row>
                        <div>
                            <h2>Announcements</h2>
                        </div>
                    </Row>
                    <Row className="formGroup">
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