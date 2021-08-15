import React from 'react';
import './Home.css'
import HomeSlider from '../HomeSlider/HomeSlider';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className="container-fluid bg-img">
            <Header></Header>
            <div className="row">
                <div className="col-md-12">
                    <HomeSlider></HomeSlider>
                </div>
            </div>
        </div>
    );
};

export default Home;