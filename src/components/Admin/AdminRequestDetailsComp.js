import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {API_URL} from "../../common/constants";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap/";
import useAuth from "../../hooks/UseAuth";
import axios from 'axios';
import "../Interface/Style.css";

export default function AdminRequestDetailsComp(props) {

    const [formData, setFormData] = useState({
        "priority": false
    });
    const [readMode, setreadMode] = useState(true);
    const navigate = useNavigate();
    const {validateLogin} = useAuth();

    let data = props.data;
    let postID = props.postID;
    let status = props.status;

    const post = data.find(postInArray => postInArray.announcementid === parseInt(postID));

    if (!post || post == null) {
        return <div>Loading. . .</div>;
    }

    const handleMakePriority = async () => {

        //Set current priority post to false
        const foundPriorityPost = data.find(item => item.priority === true);
        console.log(foundPriorityPost);
        if (foundPriorityPost !== undefined) {
            await validateLogin();
            axios.put(`${API_URL}/announcements/${foundPriorityPost.announcementid}`, {
                priority: false
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('id_token')}`
                },
                withCredentials: true,
            })
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.error(error);
                })
        }

        //Set the new post to be priority
        await validateLogin();
        axios.put(`${API_URL}/announcements/${postID}`, {
            priority: true
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('id_token')}`
            },
            withCredentials: true,
        })
            .then(response => {
                console.log(response.data)
                navigate('/admin');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleAccept = async () => {
        await validateLogin();
        axios.put(`${API_URL}/announcements/${postID}`, {
            "status": "approved"
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('id_token')}`
            },
            withCredentials: true,
        })
            .then(response => {
                console.log(response.data)
                navigate('/admin');

            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleReject = async () => {
        await validateLogin();
        axios.put(`${API_URL}/announcements/${postID}`, {
            "status": "denied",
            "priority": false
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('id_token')}`
            },
            withCredentials: true,
        })
            .then(response => {
                console.log(response.data)
                navigate('/admin');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleEdit = () => {
        setreadMode(false)
    }

    const handleSubmit = async () => {
        formData.status = "requested"
        formData.priority = false
        await validateLogin();
        axios.put(`${API_URL}/announcements/${postID}`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('id_token')}`
            },
            withCredentials: true,
        })
            .then(response => {
                console.log(response.data)
                navigate('/admin');
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
                        <Form.Group className="mb-3" controlId="form-title">
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

                        <Form.Group className="mb-3" controlId="form-body">
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

                        <Form.Group className="mb-3" controlId="form-file" xs="auto">
                            <Form.Label className="fw-bold">Media</Form.Label>
                            <Row xs="auto">
                                <Col>
                                    <Form.Control type="file" disabled/>
                                    {post.media ? <img src={post.media} style={{
                                        width: '100%',
                                        maxHeight: '300px',
                                        marginTop: '10px'
                                    }}/> : <div style={{padding: 20}}>No image Found</div>}
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="date-range">
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

                                        {status === "approved" && post.priority !== true ?
                                            <Button className="admin-buttons" variant="info" id='priority-button' onClick={() => {
                                                handleMakePriority()
                                            }}>
                                                Make Priority
                                            </Button>
                                            :
                                            <></>}

                                        {status === "requested" || status === "denied" ?
                                            <Button className="admin-buttons" variant="success" id='accept-button' onClick={() => {
                                                handleAccept()
                                            }}>
                                                Accept
                                            </Button>
                                            :
                                            <></>}

                                        {status === "denied" ?
                                            <></>
                                            :
                                            <Button className="admin-buttons" variant="danger" id='reject-button' onClick={() => {
                                                handleReject()
                                            }}>
                                                Reject
                                            </Button>
                                        }


                                        <Button className="admin-buttons" variant="primary" id='edit-button' onClick={() => {
                                            handleEdit()
                                        }}>
                                            Edit
                                        </Button>
                                        <Button className="admin-buttons" variant="secondary" id='return-button' onClick={() => {
                                            navigate(-1)
                                        }}>
                                            Return
                                        </Button>
                                    </Col>
                                </Row>
                                :
                                <Row className="float-end">
                                    <Col>
                                        <Button className="admin-buttons" variant="primary" id='submit-button' onClick={() => {
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