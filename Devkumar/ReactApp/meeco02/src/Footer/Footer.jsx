import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer__container'>
      <div className='container '>
        <div className='row'>
          <div className='col-md-3 text-white'>
            <h6 className='footer__title'>First Column</h6>
          </div>
          <div className='col-md-3 text-white'>
            <h6 className='footer__title'>Second Column</h6>
          </div>
          <div className='col-md-3 text-white'>
            <h6 className='footer__title'>Third Column</h6>
          </div>
          <div className='col-md-3 text-white'>
            <h6 className='footer__title'>Fourth Column</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
