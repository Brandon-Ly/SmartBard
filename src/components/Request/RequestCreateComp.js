import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../common/constants";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap/";
import axios from "axios";
import "../Interface/Style.css";

export default function RequestCreateComp() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        priority: false,
    });
    const [fileData, setFileData] = useState({
        file: null,
    });

    const errorMessage = `Character limit exceeded.`;

    const handleInputChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleFileChange = (event) => {
        setFileData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.files[0],
        }));
        console.log(fileData.file);
    };

    const submitForm = (data) => {
        axios
            .post(`${API_URL}/announcements`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("id_token")}`,
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            .then((response) => {
                console.log(response.data);
                navigate(-1);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //POST request
        console.log(formData);
        formData.media = "";
        if (fileData.file) {
            axios
                .post(`${API_URL}/assets`, fileData, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("id_token")}`,
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                })
                .then((response) => {
                    console.log(response.data);
                    formData.media = response.data.filename;
                    submitForm(formData);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            submitForm(formData);
        }
    };

    return (
        <Container className="request-container">
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
                                value={formData.title || ""}
                                onChange={handleInputChange}
                                maxLength="100"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errorMessage}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBody">
                            <Form.Label className="fw-bold">Body</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                name="body"
                                style={{height: "200px"}}
                                placeholder="Enter post body"
                                value={formData.body || ""}
                                onChange={handleInputChange}
                                maxLength="500"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFile" xs="auto">
                            <Form.Label className="fw-bold">Media</Form.Label>
                            <Row xs="auto">
                                <Col>
                                    <Form.Control
                                        name="file"
                                        type="file"
                                        accept=".png, .jpg, .jpeg, .gif"
                                        onChange={handleFileChange}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DateRange">
                            <Form.Label className="fw-bold">Date Range</Form.Label>
                            <Row xs="auto" className="align-items-center">
                                <Col>
                                    <Form.Control
                                        required
                                        type="date"
                                        name="datefrom"
                                        placeholder="Date from"
                                        value={formData.datefrom || ""}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                                <Col>To</Col>
                                <Col>
                                    <Form.Control
                                        required
                                        type="date"
                                        name="dateto"
                                        placeholder="Date to"
                                        value={formData.dateto || ""}
                                        onChange={handleInputChange}
                                    />
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
