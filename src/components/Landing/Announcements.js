import React, {useContext} from 'react'
import Slider from "react-slick"
import {Card, Container} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "../Interface/Style.css"
import FontContext from '../Settings/Font-Context';

export default function Announcements(props) {

    let data = props.data

    const navigate = useNavigate();
    const fontSizeNumber = useContext(FontContext);
    var slidesPerScreen = Math.min(data.length, 3)
    const arrowStyles = {
        prevArrow: styles["slick-arrow-prev"],
        nextArrow: styles["slick-arrow-next"]
    };

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
            />
            // <span
            //     className={className}
            //     style={{ ...style, display: "block", background: "black" }}
            //     onClick={onClick}
            // />
            );
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "block", background: "black", padding: "1px", width: "23px"}}
            onClick={onClick}
            />
            );
    }

    var settings = {

        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: slidesPerScreen,
        // slidesToScroll: 3,
        slidesToScroll: 1,
        // speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        prevArrow: <PrevArrow className={arrowStyles.prevArrow}/>,
        nextArrow: <NextArrow />,
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
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        textAlign: 'center'
                        }}>{announcement.title}</h1>
            <Card.Body style={{display: 'flex', flexDirection: 'column', height: '300px'}} >
                <p style={{
                    fontSize: fontSizeNumber
                }}>
                    {truncateText(announcement.body, 40)}
                </p>
                {announcement.media && (
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={announcement.media} style={{height: 200, width: 200, borderRadius: 10}} />
                    </div>)}
            </Card.Body>
        </Card>
    })

    return (
        <React.Fragment>
            <Container>
                <h1 style={{textAlign: 'center'}}>Announcements</h1>
                <Slider {...settings} >
                    {announcements}
                </Slider>
            </Container>
        </React.Fragment>

    )
}
