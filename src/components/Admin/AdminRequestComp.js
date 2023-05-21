import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AdminRequestTable from "./AdminRequestTable";
import { useNavigate } from "react-router-dom";
import "../Interface/Style.css";

export default function AdminRequestComp() {
  const navigate = useNavigate();
  const handleCreateRequest = function () {
    navigate("/create");
  };

  const currentYear = new Date().getFullYear();
  const defaultDateFrom = `${currentYear}-01-01`;

  const [formData, setFormData] = useState({
    title: "",
    datefrom: defaultDateFrom,
    dateto: "",
    priority: false,
  });

  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
    console.log(formData)
  };

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
                    <Row style={{ minWidth: "30vw" }}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                          <Form.Label className="fw-bold">Title</Form.Label>
                          <Form.Control
                            type="text"
                            name="title"
                            placeholder="Request title"
                            value={formData.title || ""}
                            onChange={handleInputChange}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DateRange">
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
          <Row className="formGroup">
            <Tabs defaultActiveKey="pending" id="table-tabs" className="mb-3">
              <Tab eventKey="pending" title="Pending">
                <AdminRequestTable status="requested" filteredObject={formData} />
              </Tab>
              <Tab eventKey="accepted" title="Accepted">
                <AdminRequestTable status="approved" filteredObject={formData} />
              </Tab>
              <Tab eventKey="rejected" title="Rejected">
                <AdminRequestTable status="denied" filteredObject={formData} />
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
