import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, Col as Column, Row, Image} from 'react-bootstrap';
import "../Interface/style.css";
import posts from "../../data.js"
import FontContext from '../../SettingFeatures/fonts/font-context';

export default function PriorityAnnouncement() {
    
    /*
    Find the first post where the priority is true. This is assuming that there can only ever be one post with a true property 
    (This should always be the case with a priority announcement) 
    */
    const priority = posts.find(post => post.priority === true) 

    const navigate = useNavigate()
    const fontSizeNumber = useContext(FontContext);

  return (
    
    
    <Container className="priority-announcement" onDoubleClick={() => navigate(`post/${priority.id}`)}>

        
    { priority.img !== "" ? 
        <React.Fragment >
            <Row>
                <h1 className="priority-announcement-title">{priority.title}</h1>
            </Row>        
            <Row>
                <Column >
                    <div className="priority-announcement-text" style={{fontSize: fontSizeNumber}} >{priority.body}</div>
                </Column>
                <Column className="m-auto" >               
                    <Image src={priority.img} className="d-block mx-auto" style={{
                    maxHeight: '300px', 
                    maxWidth: '350px', 
                    minHeight: '300px', 
                    minWidth: '350px'}} />
                </Column>
            </Row>
        </React.Fragment>
    :
    
        <Row>
            <h1>{priority.title}</h1>
            <div className="priority-announcement-text">{priority.body}</div>
        </Row>

                }
    </Container>
    
    
  )
}