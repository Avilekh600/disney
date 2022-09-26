import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function ImgSlider() {
   
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
      };

  return (
    <Carousel {...settings}>
       <Wrap>
           <img src="./images/slider-badag.jpg" alt="slider" />
       </Wrap>
       <Wrap>
           <img src="./images/slider-badging.jpg" alt="slider" />
       </Wrap>
       <Wrap>
           <img src="./images/slider-scale.jpg" alt="slider" />
       </Wrap>
       <Wrap>
           <img src="./images/slider-scales.jpg" alt="slider" />
       </Wrap>
        
        </Carousel>
  )
}

const Carousel = styled(Slider)`
      
      
      ul li button::before{
        color : whitesmoke;
      }

      li.slick-active button::before{
        color : white;
      }

`
const Wrap = styled.div`
  margin-top : 10px;
  cursor : pointer;
  transition-duration : 300ms;
  box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px 10px -10px;;
  border : 2px solid transparent;
  &:hover{
    border : 4px solid whitesmoke;
  }
   img{
    width:100%;
    height : 100%;
    border-radius : 4px;
   
   }
`