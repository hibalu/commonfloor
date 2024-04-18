import "./navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const navigateBtn = () => {
    navigate("/postpropertypage");
  };

  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="container-left">
            <div className="container-left-logos">
              <div className="ham-burger">
                <i className="bi bi-list"></i>
              </div>
              <div className="logo">
                <img
                  src="data:image/png;base64, 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"
                  alt=""
                  style={{ width: "235px", marginBottom: "-13px" }}
                />
              </div>
            </div>
          </div>

          <div className="container-center d-flex border bg-light">
            <div className="dropdowns">
              <div className="city-dropdown">
                <select>
                  <option value="">Bangalore</option>
                  <option value="">Mumbai</option>
                  <option value="">Delhi</option>
                  <option value="">Pune</option>
                  <option value="">Chennai</option>
                  <option value="">Hyderabad</option>
                  <option value="">Kolkatta</option>
                  <option value="">Ahmedabad</option>
                </select>
              </div>
              <div className="dropdown">
                <select name="" id="">
                  <option value="">Buy</option>
                  <option value="">Rent</option>
                </select>
              </div>
            </div>
            <div className="input-container d-flex">
              <div className="input">
                <input
                  type="text"
                  placeholder="Locality or Builder or Project Name"
                />
              </div>
            </div>
          </div>
          <div className="srchbtn">
            <i className="bi bi-search"></i>
          </div>
          <div className="container-right d-flex">
            <div className="profile">
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="post-btn">
              <button className="btn " id="button"><Link to ="/postpropertypage" target= "_blank">
                Post Property</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="nav">
          <div className="navbar">
            <div className="nav-items">
              <ul className="nav-links ">
                <li>
                  <Link to="/">Projects</Link>
                </li>
                <li>
                  <Link to="/">Luxury Properties</Link>
                </li>
                <li>
                  <Link to="/">Home Loans</Link>
                </li>
                <li>
                  <Link to="/">Awards</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Area Converter</Link>
                </li>
                <li>
                  <Link to="/"> CF Groups</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;

/* 
import React from 'react'
import {Link} from 'react-router-dom';
const NavbarComponent = () => {
  return (
    <div>
      <nav>
        <ul className = "nav-links">
        <li><Link to ="/">Home</Link></li>
          <li><Link to ="/postpropertypage">Post Property</Link></li>

        </ul>
      </nav>
    </div>
  )
}

export default NavbarComponent */
