import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-items d-flex">
          <div className="left d-flex ">
            <div className="about">
             
              <ul className="links">
              <h6>ABOUT</h6>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blogs</li>
                <li>Cancellation/Refund</li>
                <li> Terms & Conditions</li>
                <li> Contact</li>
                <li>Quikr</li>
                <li>India Property</li>
              </ul>
            </div>
            <div className="products">
              
              <ul className="links">
              <h6>PRODUCTS</h6>
                <li>Quikr Cowork</li>
                <li> Groups</li>
                <li> Agents</li>
                <li>Guide</li>
                <li>News</li>
                <li>Forum</li>
                <li> Retina</li>
                <li>Live-in-tour</li>
              </ul>
            </div>
          </div>
          <div className="right  d-flex">
            <div className="mobile-app">
                <h6>EXPERIENCE COMMONFLOOR APP ON MOBILE</h6>
                <div className="google border d-flex bg-dark text-white">
                <i className="bi bi-google-play"></i>
                <div className="google-text">
                    <p>Android App on</p>
                    <h6>Google Play</h6>
                </div>
                </div>
            </div>
            <div className="social-media">
                <div className="logo">
                    <img src="https://teja8.kuikr.com/cfassets/images/CommonFloor_footer_logo.png"alt="" />
                    <p>Copyright @ 2007-24 Commonfloor.com <br />
                    All rights reserved </p>
                </div>
                <p>KEEP IN TOUCH</p>
                <div className="sm-icons">
                    
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-youtube"></i>
                    <img src="https://www.clipartmax.com/png/middle/151-1514302_slideshare-logo-slideshare-icon.png" alt=""  style ={{width:"40px", background:"white"}}/>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
