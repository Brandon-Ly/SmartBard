import React from 'react'
import Slider from "react-slick"
import {Card, Container} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../Interface/style.css"
import data from "../../data.js"

export default function Announcements() {


  
  const navigate = useNavigate();


  var settings = {

    infinite: true,
    centerPadding: "60px",
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    
   
  };



  const announcements = data.map((announcement) => {
      return <Card className="slide-post" onDoubleClick={() => navigate(`post/${announcement.id}`)} >
              <h1>{announcement.title}</h1>
              <Card.Body>
                <p>{announcement.body}</p>
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
