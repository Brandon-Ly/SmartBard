import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Col as Column, Container, Image, Row} from 'react-bootstrap';
import FontSizeContext from '../Settings/FontSize-Context';
import FontColorContext from '../Settings/FontColor-Context';
import "../Interface/Style.css";

export default function PriorityAnnouncement(props) {

    let priority = props.priorityPost;

    const navigate = useNavigate()
    const fontSizeNumber = useContext(FontSizeContext);
    const fontColor = useContext(FontColorContext);

    //If the announcement isn't loaded, then it'll temporarily say loading
    if (!priority || priority == null) {
        return <></>;
    }

    return (
        <Container className="request-container" onDoubleClick={() => navigate(`/home/${priority.announcementid}`)}>
            {priority.media ?
                <React.Fragment>
                    <Row>
                        <h1 className="request-row-header"
                            style={{fontSize: fontSizeNumber, color: fontColor}}>{priority.title}</h1>
                    </Row>
                    <Row className="align-items-center">
                        <Column>
                            <div className="request-div"
                                 style={{
                                     fontSize: fontSizeNumber,
                                     color: fontColor,
                                     wordWrap: 'break-word'
                                 }}>{priority.body}</div>
                        </Column>
                        <Column className="m-auto">
                            <div
                                className="image-container"
                                style={{padding: '20px', display: 'inline-block'}}
                            >
                                <Image
                                    src={priority.media}
                                    className="d-block mx-auto"
                                    style={{
                                        maxHeight: '300px',
                                        maxWidth: '350px',
                                        minHeight: '300px',
                                        minWidth: '350px',
                                        borderRadius: 25,
                                        padding: '10px'
                                    }}
                                    alt='preview image of priority announcement'
                                />
                            </div>
                        </Column>
                    </Row>
                </React.Fragment>
                :
                <React.Fragment>
                    <Row>
                        <h1 style={{color: fontColor}}>{priority.title}</h1>
                        <div className="request-div" style={{
                            fontSize: fontSizeNumber,
                            color: fontColor,
                            borderRadius: '10px'
                        }}>{priority.body}</div>
                    </Row>
                </React.Fragment>
            }
        </Container>
    )
}