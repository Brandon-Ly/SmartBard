import React, { useState, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import {Button, Container, Image, Row} from 'react-bootstrap'
import '../components/Interface/Pages.css';
import FontContext from '../components/Settings/Font-Context';
import TextToSpeech from '../components/Settings/TextToSpeech'

export default function Post() {

    const [data, setData] = useState([]);
    const [post, setPost] = useState(null);
    const {postID} = useParams();
    const fontSizeNumber = useContext(FontContext);

    //API GET request
    useEffect(() => {
        fetch('http://localhost:5000/announcements?status=approved&datefrom=2000-01-01&dateto=2050-01-01')
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
            <Row><h1 className="text-center" style={{fontSize: 48}} >{post.title}</h1></Row>
            <Row><p style={{fontSize: fontSizeNumber, padding: 100}}>{post.body}</p></Row>
            <Row><Button size="lg" variant="warning" style={{marginTop:20}}>Attached Documents</Button></Row>
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
