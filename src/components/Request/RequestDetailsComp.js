import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useAuth from "../../hooks/UseAuth";
import {API_URL} from "../../common/constants";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap/";
import axios from 'axios';
import "../Interface/Style.css";

export default function RequestDetailsComp(props) {

    const [formData, setFormData] = useState({
        "priority": false
    });
    const [readMode, setreadMode] = useState(true);
    const navigate = useNavigate();
    const {validateLogin} = useAuth();

    let data = props.data;
    let postID = props.postID;

    const post = data.find(postInArray => postInArray.announcementid === parseInt(postID));

    if (!post || post == null) {
        console.log(data);
        return <div>Loading. . .</div>;
    }


    const handleEdit = () => {
        setreadMode(false)
    }

    const handleSubmit = async () => {
        formData.status = "requested";
        formData.priority = false;
        await validateLogin();
        axios.put(`${API_URL}/announcements/${postID}`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('id_token')}`
            },
            withCredentials: true,
        })
            .then(response => {
                console.log(response.data)
                navigate('/request');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleInputChange = (event) => {
        setFormData((prevState) => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ))
    };

    return (
        <Container className="justify-content-center align-items-center vh-100"
                   style={{marginTop: '10px', padding: '20px'}}>
            <Card className="shadow-sm">
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label className="fw-bold">Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="title"
                                defaultValue={post.title}
                                readOnly={readMode}
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBody">
                            <Form.Label className="fw-bold">Body</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                name="body"
                                style={{height: "200px"}}
                                defaultValue={post.body}
                                readOnly={readMode}
                                value={formData.body}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFile" xs="auto">
                            <Form.Label className="fw-bold">Media</Form.Label>
                            <Row xs="auto">
                                <Col>
                                    <Form.Control type="file" disabled/>
                                    {post.media ? <img src={post.media}
                                                       style={{width: '200px', height: '200px', marginTop: '10px'}}/> :
                                        <div style={{padding: 20}}>No image Found</div>}
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="DateRange">
                            <Form.Label className="fw-bold">Date Range</Form.Label>
                            <Row xs="auto" className="align-items-center">
                                <Col>
                                    <Form.Control required
                                                  type="date"
                                                  name="datefrom"
                                                  defaultValue={post.datefrom.substring(0, 10)}
                                                  value={formData.datefrom}
                                                  readOnly={readMode}
                                                  onChange={handleInputChange}/>
                                </Col>
                                <Col>To</Col>
                                <Col>
                                    <Form.Control required
                                                  type="date"
                                                  name="dateto"
                                                  defaultValue={post.dateto.substring(0, 10)}
                                                  value={formData.dateto}
                                                  readOnly={readMode}
                                                  onChange={handleInputChange}/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            {readMode ? <Row className="float-end">
                                    <Col>

                                        <Button className="admin-buttons" variant="primary" onClick={() => {
                                            handleEdit()
                                        }}>
                                            Edit
                                        </Button>
                                        <Button className="admin-buttons" variant="secondary" onClick={() => {
                                            navigate(-1)
                                        }}>
                                            Return
                                        </Button>
                                    </Col>
                                </Row>
                                :
                                <Row className="float-end">
                                    <Col>
                                        <Button className="admin-buttons" variant="primary" onClick={() => {
                                            handleSubmit()
                                        }}>Submit Changes</Button>
                                    </Col>
                                </Row>}
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}