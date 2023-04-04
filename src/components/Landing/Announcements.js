import React, {useContext} from 'react'
import Slider from "react-slick"
import {Card, Container} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../Interface/Style.css"
import FontContext from '../Settings/Font-Context';

export default function Announcements(props) {

    let data = props.data

    const navigate = useNavigate();
    const fontSizeNumber = useContext(FontContext);
    var slidesPerScreen = Math.min(data.length, 3)

    function PrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style, display: "block", background: "black"}}
                onClick={onClick}
            />
        );
    }

    function NextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style, display: "block", background: "black"}}
                onClick={onClick}
            />
        );
    }

    var settings = {

        infinite: true,
        centerPadding: "60px",
        dots: true,
        speed: 500,
        slidesToShow: slidesPerScreen,
        slidesToScroll: 3,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,

    };


    const announcements = data.map((announcement) => {
        return <Card style={{border: '2px solid black'}} className="slide-post"
                     onDoubleClick={() => navigate(`/home/${announcement.announcementid}`)}>
            <h1 style={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
            }}>{announcement.title}</h1>
            <Card.Body>
                <p style={{
                    fontSize: fontSizeNumber,
                    height: '300px',
                    overflow: 'auto'
                }}>{announcement.body}</p>
            </Card.Body>
        </Card>
    })

    return (
        <React.Fragment>
            <Container>
                <h1>Announcements</h1>
                <Slider {...settings} >
                    {announcements}
                </Slider>
            </Container>
        </React.Fragment>

    )
}
