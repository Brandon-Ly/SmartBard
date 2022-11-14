import React from 'react'
import {Container, Col as Column, Row, Image} from 'react-bootstrap'
import "./components.css";

export default function PriorityAnnouncement() {
  return (
    
    <Container className="priority-announcement" style={{padding: '50px'}}>
        <Row>
            <h1>Priority Announcement!</h1>
        </Row>
        <Row>
            <Column >
                <div className="priority-announcement-text">This is where text would go for the priority announcement </div>
            </Column>
            <Column className="m-auto" >               
                <Image src="https://picsum.photos/300/300" className="d-block mx-auto" style={{
                maxHeight: '300px', 
                maxWidth: '300px', 
                minHeight: '300px', 
                minWidth: '300px'}} />
            </Column>
        </Row>
    </Container>
    
  )
}
