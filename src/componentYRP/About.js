/* eslint-disable */

import React from 'react'
import './style.css'
import { faCartShopping, faGear, faImage, faNewspaper, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="about-wrapper">
    <img className="nds-img" src='../imgYurim789/images/nintendo.png' alt="nintendo"></img>
    <div className="nds-content">
      <div className="nds-top-item">
        <div className="nds-top-left-item">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="nds-top-right-item">
          <p>16 : 45</p>
          <img src="../imgYurim789/images/wifi.png" alt="wifi"></img>
          <p>100%</p>
          <img src="../imgYurim789/images/battery.png" alt="battery"></img>
        </div>
      </div>

      <div className="about-main">
        <div className="btn"><img src="../imgYurim789/images/triangle btn left.png" alt="left-btn"></img></div>
        <div className="nds-main-item">
          {/* <!-- 팀 로고 이미지 외의 다른 이미지는 팀원들 사진으로 수정할것임 --> */}
          <Link to='/about/team' className="logo-img"><img src="../imgYurim789/images/team logo black full.png" alt="teamlogoimg"></img></Link>
          <Link to='/about/sb' className="logo-img"><img src="../imgYurim789/images/김승빈.jpg" alt="teamimg"></img></Link>
          <Link to='/about/sa' className="logo-img"><img src="../imgYurim789/images/조성아.JPG" alt="teamlogoimg"></img></Link>
          <Link to='/about/yr' className="logo-img"><img src="../imgYurim789/images/박유림.jpg" alt="teamlogoimg"></img></Link>
          <Link to='/about/hs' className="logo-img"><img src="../imgYurim789/images/인호성.jpeg" alt="teamlogoimg"></img></Link>
        </div>
        <div className="btn"><img src="../imgYurim789/images/triangle btn right.png" alt="right-btn"></img></div>
      </div>

      <div className="about-icon-list">
        <div className='fasbox'>
          <FontAwesomeIcon className='newspaper' icon={faNewspaper} />
        </div>
        <div className='fasbox'>
          <FontAwesomeIcon className='cart-shopping' icon={faCartShopping} />
        </div>
        <div className='fasbox'>
          <FontAwesomeIcon className='image' icon={faImage} />
        </div>
        <div className='fasbox'>
          <FontAwesomeIcon className='gear' icon={faGear} />
        </div>
        <div className='fasbox'>
          <FontAwesomeIcon className='power-off' icon={faPowerOff} />
        </div>
      </div>

      <div className="about-line"> </div>

      <div className="about-footer">
        <img src="../imgYurim789/images/nintendo switch logo.png" alt="nintendo logo"></img>
        <Link to='/' className="about-footer-btn-box team-about-btn-list">
          <div className="about-footer-btn"><p>A</p></div>
          <p>뒤로</p>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default About