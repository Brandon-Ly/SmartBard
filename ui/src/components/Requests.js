import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import RequestTable from "./RequestTable";
import classes from "./Request.module.css";


export default function Requests() {
  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Body>
          <Row>
            <div>
              <h2>Your Requests</h2>
            </div>
          </Row>
          <Row className={classes.formGroup}>
            <Tabs defaultActiveKey="pending" id="table-tabs" className="mb-3">
              <Tab eventKey="pending" title="Pending">
                <RequestTable status="Pending" />
              </Tab>
              <Tab eventKey="accepted" title="Accepted">
                <RequestTable status="Accepted" />
              </Tab>
              <Tab eventKey="rejected" title="Rejected">
                <RequestTable status="Rejected" />
              </Tab>
            </Tabs>
          </Row>
          <Row className="float-end">
            <Col>
              <Button href="#">Create</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}