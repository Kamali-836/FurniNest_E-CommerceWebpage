import React from 'react';
import { Link } from 'react-router-dom';
import { routesConfig } from '../AllRoutes';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faArrowRight, faEnvelope,faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
      <div className="box">
  <h3><FontAwesomeIcon icon={faBed} />FurniNest</h3>
  <p></p>
  <div className="share">
    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
    <a href="https://x.com/"><FontAwesomeIcon icon={faTwitter} /></a>
    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
    <a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faLinkedin} /></a>
  </div>
</div>


        <div className="box">
  <h3>Contact us</h3>
  <a href="#" className="links">
    <FontAwesomeIcon icon={faPhone} />+044-678-3450
  </a>
  <a href="#" className="links">
    <FontAwesomeIcon icon={faPhone} />+044-638-1480
  </a>
  <a href="#" className="links">
    <FontAwesomeIcon icon={faEnvelope} />furninest@gmail.com
  </a>
  <a href="#" className="links">
    <FontAwesomeIcon icon={faMapMarkerAlt} />Salem, Tamil Nadu, India
  </a>
</div>
        
<div className="box">
  <h3>Quick Links</h3>
  <a href="/Home" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Home
  </a>
  <a href="/livingroom" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Living room
  </a>
  <a href="/diningroom" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Dining room
  </a>
  <a href="/bedroom" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Bedroom
  </a>
  <a href="/officeroom" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Office room
  </a>
  <a href="#review" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Review
  </a>
  <a href="/Contact" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Contact Us
  </a>
</div>

<div className="box">
  <h3>Check Out Here!</h3>
  <Link to="/About" className="links">
    <FontAwesomeIcon icon={faArrowRight} />About us
  </Link>
  <Link to="/Privacy" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Privacy policy
  </Link>
  <Link to="/TermsConditions" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Terms & conditions
  </Link>
  <Link to="/FAQ" className="links">
    <FontAwesomeIcon icon={faArrowRight} />FAQs
  </Link>
  <Link to="/Contact" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Contact us
  </Link>
  <Link to="/ReturnPolicy" className="links">
    <FontAwesomeIcon icon={faArrowRight} />Return & refund policy
  </Link>
</div>
        
        <div className="box">
          <h3>Newsletter</h3>
          <p>Subscribe for latest updates</p>
          <input type="email" className="email" placeholder="your email" />
          <input type="submit" value="subscribe" className="btn" />
          <img src="" alt="" />
        </div>
      </div>

      <div className="credit">Created by <span>FurniNest</span> | All rights reserved </div>
    </section>
  );
};

export default Footer;
