import React, {useContext} from 'react'
import data from "../data.js"
import {useParams} from 'react-router-dom'
import {Button, Container, Image, Row} from 'react-bootstrap'
import '../components/Interface/Pages.css';
import FontContext from '../components/Settings/Font-Context';
import TextToSpeech from '../components/Settings/TextToSpeech'

export default function Post() {

    const {postID} = useParams();
    const post = data.find(postInArray => postInArray.id === parseInt(postID))
    const fontSizeNumber = useContext(FontContext);


    return (
        <Container className="entire-post">
            <Row><h1 className="text-center" style={{fontSize: 48}}>{post.title}</h1></Row>
            <Row><p style={{fontSize: fontSizeNumber, padding: 100}}>{post.body}</p></Row>
            <Row><TextToSpeech text={post.body}/></Row>
            <Row><Image src={post.img} className="d-block mx-auto" style={{
                maxHeight: '500px',
                maxWidth: '50px',
                minHeight: '500px',
                minWidth: '500px'
            }}/> </Row>
            <Row><Button size="lg" variant="warning" style={{marginTop: 20}}>Attached Documents</Button></Row>

        </Container>
    )
}
