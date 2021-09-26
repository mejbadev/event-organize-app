import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header bg-opacity-25 '> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src="https://e7.pngegg.com/pngimages/23/900/png-clipart-event-management-computer-icons-business-engagement-marketing-event-blue-text.png" alt="" width="30" height="24"></img>
    </a>
    <a className="navbar-brand text-info" href="#">IEvent</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Event</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Date</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
            <h1 className='heading text-center pt-2 text-info fw-bold'>Welcome to International Motivational Event</h1>
            <h3 className='semi-heading text-center text-info pb-2 fw-bold'>Join and Charge Yourself</h3> 
            <h5 className='semi-heading text-center text-info pb-2 fw-bold'>You can buy 20 tickets</h5>
        </div>
    );
};

export default Header;