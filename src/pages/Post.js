import React, { useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import {Button, Container, Row, Modal} from 'react-bootstrap'
import '../components/Interface/Pages.css';
import ThemeContext from '../components/Settings/Theme-Context'
import FontSizeContext from '../components/Settings/FontSize-Context';
import FontColorContext from '../components/Settings/FontColor-Context';
import TextToSpeech from '../components/Settings/TextToSpeech'
import {API_URL} from "../common/constants";

export default function Post() {

    const [data, setData] = useState([]);
    const [post, setPost] = useState(null);
    const {postID} = useParams();
    const theme = useContext(ThemeContext);
    const fontSizeNumber = useContext(FontSizeContext);
    const fontColor = useContext(FontColorContext);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    //API GET request
    useEffect(() => {
        fetch(`${API_URL}/announcements`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('id_token')}`
            },
            withCredentials: true,
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error))
    }, [])

     //Finding the right post to display
    useEffect(() => {
        if (data.length > 0) {
        const foundItem = data.find(item => item.announcementid === parseInt(postID))
        if (foundItem) {
            setPost(foundItem);
        } else {
            console.log("No item with priority found");
        }
        } else {
        console.log("Data is empty");
        }

    }, [data])


    //If the post isn't loaded, then it'll temporarily say loading
    if (!post || post == null) {
        return <div>Loading. . .</div>;
    }

    return (
        <Container className="entire-post">
            <Row><h1 className="text-center" style={{fontSize: 48, color: fontColor}} >{post.title}</h1></Row>
            
            <div style={{backgroundColor: '#D3D3D3'}}>
                <Row><p style={{fontSize: fontSizeNumber,
                    color: fontColor, 
                    padding: 50,
                    wordWrap: 'break-word'
                    }}>
                    {post.body}
                    </p>
                </Row>
                <div style={{padding: 50}}>
                    <Row className="d-flex justify-content-center align-items-center"><img src={post.media} style={{width: '600px', borderRadius: 30}} alt='image for current post' /></Row>
                </div>
            </div>

            <Row>{post.media && <Button size="lg"  style={{marginTop:20,
                backgroundColor: theme.foreground,
                color: theme.text,
                border: theme.foreground,}} onClick={handleShow}>Attached Documents</Button>}</Row>

            <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Attached Documents</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <a href={post.media} download>Click here to download image</a>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
            </Modal>
        </Container>
        
    )
}

/*<Container className="entire-post">
    <Row><h1 className="text-center" style={{fontSize: 48}} >{post.title}</h1></Row>
    <Row><p style={{fontSize: fontSizeNumber, padding: 100}}>{post.body}</p></Row>
    <Row><Image src={post.img} className="d-block mx-auto" style={{
        maxHeight: '500px',
        maxWidth: '50px',
        minHeight: '500px',
        minWidth: '500px'}} /> </Row>
    <Row><Button size="lg" variant="warning" style={{marginTop:20}}>Attached Documents</Button></Row>

    </Container>*/
