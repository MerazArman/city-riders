import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/city-rider.PNG'
import {Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {

  const [userLogged, setUserLogged] = useContext(UserContext)
  const history = useHistory();
  const loginBtn = () =>{
    history.push('/login')
  }
  return (
 
  <nav className="navbar  navbar-expand-lg navbar-light " >
      <div className="container">
          <a className="navbar-brand" href="#navbar"> <img className="header-logo"  src={logo} alt="" /> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item    mr-4">
                      <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                  </li>
                  <li className="nav-item    mr-4">
                      <Link to="/destination/2a" className="nav-link" >Destination</Link>
                  </li>
                  <li className="nav-item    mr-4">
                      <Link to="/" className="nav-link" >Blog</Link>
                  </li>
                  <li className="nav-item    mr-4">
                      <a className="nav-link" href="#blog">Contact</a>
                  </li>
                  <li className="nav-item    mr-4">
                  <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item    mr-4">
                   {userLogged.success && <a href="l" className="nav-link"> {userLogged.name} </a> }
                  </li>
                  <li className="nav-item   ">
                  {
                  userLogged.success ? <button className="btn btn-danger" onClick={() => setUserLogged({})} > logout</button>
                  :<button className="btn btn-danger" onClick={loginBtn} > Login</button>
                }
                  </li>
              </ul>
              <div className="d-flex">

                  
                  
              </div>
          </div>
      </div>
  </nav>

    );
};

export default Header;