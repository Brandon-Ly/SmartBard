import React, {useContext} from 'react'
import Slider from "react-slick"
import {Card, Container} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../Interface/Style.css"
import FontSizeContext from '../Settings/FontSize-Context';
import FontColorContext from '../Settings/FontColor-Context';

export default function Announcements(props) {

    let data = props.data

    const navigate = useNavigate();
    const fontSizeNumber = useContext(FontSizeContext);
    const fontColor = useContext(FontColorContext);
    var slidesPerScreen = Math.min(data.length, 3)

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <button onClick={onClick} style={{ position: "absolute", top: "40%", left: "-85px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                </svg>
            </button>
            );
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button onClick={onClick} style={{ position: "absolute", top: "40%", right: "-85px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                </svg>
            </button>
            );
    }

    var settings = {
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: slidesPerScreen,
        // slidesToScroll: 3,
        slidesToScroll: 1,
        // speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };

    function truncateText(text, length) {
        if (text.length <= length) {
            return text;
        }
        return text.substring(0, length) + " . . . ";
    }

    const announcements = data.map((announcement) => {


        return <Card style={{border: '2px solid black'}} className="slide-post" onDoubleClick={() => navigate(`/home/${announcement.announcementid}`)}>
            <h1 style={{ 
                        color: fontColor,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        textAlign: 'center'
                        }}>{announcement.title}</h1>
            <Card.Body style={{display: 'flex', flexDirection: 'column', height: '300px'}} >
                <p style={{
                    fontSize: fontSizeNumber,
                    color: fontColor
                }}>
                    {truncateText(announcement.body, 40)}
                </p>
                {announcement.media && (
                    <div className="d-flex justify-content-center align-items-center" style={{overflow: 'hidden'}} >
                      <img src={announcement.media} style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 10}} alt='preview image of post' />
                    </div>)}
            </Card.Body>
        </Card>
    })

    return (
        <React.Fragment>
            <Container >
                <h1 style={{color: fontColor, textAlign: 'center'}}>Announcements</h1>
                <Slider {...settings} >
                    {announcements}
                </Slider>
            </Container>
        </React.Fragment>

    )
}
