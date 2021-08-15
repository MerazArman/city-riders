import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./HomeSlider.css"
import car from "../../images/Frame-2.png";
import bus from "../../images/Frame-1.png";
import treen from "../../images/Group.png";
import motor from "../../images/Frame.png";
import plane from "../../images/imgbin-cartoon-plane.jpg";
import { useHistory } from 'react-router';
import fakeData from '../fakeData/fakeData'
import { useState } from 'react';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1224,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


    const [riders, setRiders] = useState(fakeData); 
    console.log(riders);   
     const history = useHistory();
     const ridersBtnHandler = (id) =>{
          history.push(`/destination/${id}`)
     }
    return (
        <div className="container" style={{}}>
            <Slider {...settings}>

              {
                riders.map(rider => (
                  <div className="motor slider-image" onClick ={() => ridersBtnHandler(rider.id)}>
                  <img src={rider.image} alt="" />
                  <h2 className="slider-text">{rider.category} </h2>
              </div>
                ))
              }

                {/* <div className="car slider-image" onClick ={ridersBtnHandler} >
                    <img src={car} alt="" />
                    <h2 className="slider-text">Car</h2>
                </div>
                <div className="bus slider-image" onClick ={ridersBtnHandler}>
                    <img src={bus} alt="" />
                    <h2 className="slider-text">Bus</h2>
                </div>
                <div className="treen slider-image" onClick ={ridersBtnHandler}>
                    <img src={treen} alt="" />
                    <h2 className="slider-text">Train</h2>
                </div>
                <div className="treen slider-image" onClick ={ridersBtnHandler}>
                    <img src={plane} alt="" />
                    <h2 className="slider-text">Plane</h2>
                </div> */}
            </Slider>
        </div>
    );
};

export default HomeSlider;