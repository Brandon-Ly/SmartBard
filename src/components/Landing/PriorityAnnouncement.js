import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Col as Column, Container, Image, Row} from 'react-bootstrap';
import "../Interface/Style.css";
import FontContext from '../Settings/Font-Context';

export default function PriorityAnnouncement(props) {

    let priority = props.priorityPost;

    const navigate = useNavigate()
    const fontSizeNumber = useContext(FontContext);

    //If the announcement isn't loaded, then it'll temporarily say loading
    if (!priority || priority == null) {
        return <></>;
    }

    return (

        <Container className="priority-announcement" onDoubleClick={() => navigate(`/home/${priority.announcementid}`)}>

            {priority.media  ?
                <React.Fragment>
                    <Row>
                        <h1 className="priority-announcement-title">{priority.title}</h1>
                    </Row>
                    <Row>
                        <Column>
                            <div className="priority-announcement-text"
                                 style={{fontSize: fontSizeNumber, wordWrap: 'break-word', borderRadius: 10}}>{priority.body}</div>
                        </Column>
                        <Column className="m-auto">
                            <Image src={priority.media} className="d-block mx-auto" style={{
                                maxHeight: '300px',
                                maxWidth: '350px',
                                minHeight: '300px',
                                minWidth: '350px',
                                borderRadius: 25,
                                padding: '10px'
                            }}/>
                        </Column>
                    </Row>
                </React.Fragment>
                :
                <React.Fragment>
                <Row>
                    <h1>{priority.title}</h1>
                    <div className="priority-announcement-text" style={{fontSize: fontSizeNumber}}>{priority.body}</div>
                </Row>
                </React.Fragment>
            }

        </Container>

    )
}