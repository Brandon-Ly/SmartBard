import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';
import "../Interface/Style.css";
import FontContext from '../Settings/Font-Context';

export default function PriorityAnnouncement(props) {
    let priority = props.priorityPost;

    const navigate = useNavigate()
    const fontSizeNumber = useContext(FontContext);

    //If the announcement isn't loaded, then it'll temporarily say loading
    if (!priority || priority == null) {
        return <div>Loading. . .</div>;
    }

    return (

        <Container className="priority-announcement" onDoubleClick={() => navigate(`post/${priority.announcementid}`)}>
            <Row>
                <h1>{priority.title}</h1>
                <div className="priority-announcement-text">{priority.body}</div>
            </Row>
        </Container>

    )
}