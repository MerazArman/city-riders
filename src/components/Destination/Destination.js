import React from 'react';
import './Destination.css';
import map from '../../images/Map.png'
import DestinationForm from '../DestinationForm/DestinationForm'
import Header from '../Header/Header';
import MyMap from '../MyMap/MyMap';

const Destination = () => {
    return (
        <div className="container-fluid" >
            <Header></Header>
            <div className="row" style={{padding:"28px", marginTop:"39px"}}>
                <div className="col-md-5">
                    <DestinationForm></DestinationForm>
                </div>
                <div className="col-md-7" >
                    {/* <img src={map} alt="" style={{width:'90%', height:'90%'}} /> */}
                    <MyMap></MyMap>
                </div>
            </div>
        </div>
    );
};

export default Destination;