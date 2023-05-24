import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Interface/Style.css";
import axios from 'axios';
import {API_URL} from "../../common/constants";
import useAuth from "../../hooks/UseAuth";

export default function AdminRequestDetailsComp(props) {

    const [formData, setFormData] = useState({
        "priority": false
      });
    const [readMode, setreadMode] =  useState(true);
    const navigate = useNavigate();
    const { validateLogin } = useAuth();

    let data = props.data;
    let postID = props.postID;
    let status = props.status;

    const post = data.find(postInArray => postInArray.announcementid === parseInt(postID));

    if (!post || post == null) {
        return <div>Loading. . .</div>;
    }

    const handleMakePriority = async () => {

        //Set current priority post to false
        const foundPriorityPost= data.find(item => item.priority === true);
        console.log(foundPriorityPost);
        if (foundPriorityPost !== undefined){
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
        })}

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
          {...prevState,
          [event.target.name]: event.target.value}
        ))
      };



    return (
        <Container className="justify-content-center align-items-center vh-100" style={{marginTop: '10px', padding: '20px'}}>
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
                                readOnly = {readMode}
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
                                readOnly = {readMode}
                                value={formData.body}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFile" xs="auto">
                            <Form.Label className="fw-bold">Media</Form.Label>
                            <Row xs="auto">
                                <Col>
                                    <Form.Control type="file" disabled/>
                                    {post.media ? <img src={post.media} style={{ width: '100%', maxHeight: '300px', marginTop: '10px' }}/> : <div style={{padding: 20}}>No image Found</div>}
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
                                                  readOnly = {readMode}
                                                  onChange={handleInputChange}/>
                                </Col>
                                <Col>To</Col>
                                <Col>
                                    <Form.Control required 
                                                  type="date"
                                                  name="dateto"
                                                  defaultValue={post.dateto.substring(0, 10)}
                                                  value={formData.dateto}
                                                  readOnly = {readMode}
                                                  onChange={handleInputChange}/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            {readMode ? <Row className="float-end">
                                <Col>

                                { status === "approved" && post.priority !== true ? 
                                <Button className="adminButtons" variant="info" id="makePrioButton" onClick={() => { handleMakePriority()
                                }}>
                                    Make Priority
                                </Button>
                                :
                                <></>}

                                { status === "requested" || status === "denied" ?
                                <Button className="adminButtons" variant="success" id="acceptButton" onClick={() => { handleAccept()
                                }}>
                                    Accept
                                </Button>
                                :
                                <></>}

                                { status === "denied" ? 
                                <></>
                                :
                                <Button className="adminButtons" variant="danger" id="rejectButton" onClick={() => { handleReject()
                                }}>
                                    Reject
                                </Button>
                                }   

                            
                                <Button className="adminButtons" variant="primary" id="editButton" onClick={() => { handleEdit()
                                }}>
                                    Edit
                                </Button>
                                <Button className="adminButtons" variant="secondary" id="returnButton" onClick={() => {
                                    navigate(-1)
                                }}>
                                    Return
                                </Button>
                                </Col>
                            </Row>
                            :
                            <Row className="float-end">
                                <Col>
                                    <Button className="adminButtons" variant="primary" id="submitChangeButton" onClick={() => { handleSubmit()
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

/*
<Button className="adminButtons" variant="success" onClick={() => {
}}>
    Accept
</Button>
<Button className="adminButtons" variant="danger" onClick={() => {
}}>
    Reject
</Button>
<Button className="adminButtons" variant="primary" onClick={() => {
}}>
    Edit
</Button>
<Button className="adminButtons" variant="secondary" onClick={() => {
    navigate(-1)
}}>
    Return
</Button>
*/