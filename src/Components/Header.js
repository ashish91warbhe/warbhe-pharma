import React from 'react';
import { Link } from "react-router-dom";
import App from '../App';

const icon = {
  paddingRight: '10px'
}
const logo = {
  position: "reletive",
  height: '70px',
  width: "100px"
}
export default function () {
  return (
    <div>
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-md-4 pt-2 bg-success text-white'>
            <i className="bi bi-telephone-fill mt-2" style={icon}>
            </i>
            <b>8999761332</b>
          </div>
          <div className='col-md-4 pt-2  bg-success text-white'>
            <i className="bi bi-envelope-fill" style={icon}>
            </i>
            warbhepharma@gmail.com
          </div>
          <div className='col-md-4 bg-success text-white'>
            <div className="dropdown">
              <button className="btn text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Languages
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">English</a></li>
                <li><a className="dropdown-item" href="#">Hindi</a></li>
                <li><a className="dropdown-item" href="#">Marathi</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm p-1 mb-2" style={{backgroundColor:"khaki"}}>
        <div className="container-fluid">
          <img src='./Warbhe-Pharma.png' style={logo} />
          <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-link" id="navbarSupportedContent">
            <ul className=" nav justify-content-end navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" id="Hover">
                <Link className="nav-link active  text-dark " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item" id="Hover">
                <Link className="nav-link active text-dark" to="about">About Us</Link>
              </li>
              <li className="nav-item" id="Hover">
                <Link className="nav-link active text-dark" to="product">Products</Link>
              </li>
              <li className="nav-item" id="Hover">
                <Link className="nav-link active text-dark" to="contact">Contact Us</Link>
              </li>
              <li className="nav-item" id="Hover">
                <Link className="nav-link active text-dark" to="signup">Sign Up</Link>
              </li>
              <li className="nav-item" id="Hover">
                <Link className="nav-link active text-dark" to="signin">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
