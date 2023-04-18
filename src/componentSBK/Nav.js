/* eslint-disable */

import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react';
import './Nav.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Nav({ loggedIn, setLoggedIn }) {

  let [navChange, setNavChange] = useState(false);
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [showNavbar, setShowNavbar] = useState(false);
  let [showlist, setShowlist] = useState(false);
  let [bookmark, setBookmark] = useState(false);
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [showname, setShowname] = useState('');

  let birth = localStorage.getItem('birth');
  let birthTxt = JSON.parse(birth);

  const navigate = useNavigate();

  const handleLogout = (event) => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('birth');
    navigate('/');
    setLoggedIn(false); // 상태 업데이트
    alert('성공적으로 로그아웃 되었습니다.')
  };

  const handleInfo = () => {
    setShowname(localStorage.getItem('name'));
    loggedIn ? (
      setIsModalOpen(true)
    ) : alert('로그인 후 이용부탁드립니다.');
  }

  let handleScroll = useCallback(() => {
    (window.scrollY > 45 && !navChange ) ? (
      setNavChange(true)
    ) : (window.scrollY < 45 && navChange ) ? (
      setNavChange(false)
    ) : null
  }, [navChange]);

  useEffect(() => {
    isModalOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"
  }, [isModalOpen]);

  useEffect(() => {
    let handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll); 
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (navChange) {
      let timeout = setTimeout(() => {
        setBookmark(true);
      }, 500);

      return () => {
        clearTimeout(timeout);
      }
    } else {setBookmark(false)}
  }, [navChange]);

  useEffect(() => {
    let timeoutNav = setTimeout(() => {
      setShowNavbar(true);
    }, 500);

    return () => {
      clearTimeout(timeoutNav);
    };
  }, []);

  useEffect(() => {
    let timeoutList = setTimeout(() => {
      setShowlist(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutList);
    };
  }, []);

  let location = useLocation();

  if (
    location.pathname === '/signup' || 
    location.pathname === '/login' || 
    location.pathname === '/write' || 
    location.pathname === '/Notice' || 
    location.pathname === '/post' ||
    location.pathname === '/post/write' ||
    location.pathname.startsWith('/post/') ||
    location.pathname === '/about' ||
    location.pathname.startsWith('/about/')
    ) {
    return null; 
  }

  return (
    <>
      <Link to={'/pspage'} className={`bookmark ps ${ bookmark ? 'on' : ''}`}><img src='/imgSbk930123/bookmarkps.png'></img></Link>
      <Link to={'/ninpage'} className={`bookmark nin ${ bookmark ? 'on' : ''}`}><img src='/imgSbk930123/bookmarknin.png'></img></Link>
      <div className={`bookmark st ${ bookmark ? 'on' : ''}`}><img src='/imgSbk930123/bookmarkst.png'></img></div>
      <section className='global-header'>
        <nav className={`global-nav ${ navChange ? 'on' : '' } ${ showNavbar ? 'show' : '' }`}>
          <ul className={`nav-list ${ showlist ? 'showlist' : '' } ${ navChange ? 'on' : '' }`}>
            <a href='/'>Home</a>
            <a href='/post'>Notice</a>
            <a href='/about'>About</a>
          </ul>
          <h1 className='react-logo'>
            <a href="/"><img className={`${ showNavbar ? 'show' : '' }`} src={!navChange ? process.env.PUBLIC_URL + 'imgSbk930123/teamLogoBlack2.png' : process.env.PUBLIC_URL + 'imgSbk930123/teamLogoWhite2.png'}></img></a>
          </h1>
          <ul className={`nav-list nav-op ${ showlist ? 'showlist' : '' } ${ navChange ? 'on' : '' }`}>
            {loggedIn ? (
              <>
                <a onClick={handleLogout}>&nbsp;LogOut&nbsp;</a>
                <a>lorem</a>
              </>
            ) : (
              <>
                <a href='/login'>Login</a>
                <a href='/signup'>Sign&nbsp;Up</a>
              </>
            )}
            <a className='nav-info-icon' onClick={handleInfo}>&nbsp;&nbsp;<FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;</a>
          </ul>
        </nav>
      </section>
      {isModalOpen && (
        <>
          <div className='signup-overlay'></div>
          <div className="Nav-modal">
            <div className="signup-modal-content">
              <div className='signup-modal-img-box'><img src='imgSbk930123/teamLogoWhite2.png'></img></div>
              <h1 style={{marginTop: "20px"}}>{showname} 님의 정보</h1>
              <h3>이메일</h3>
              <h4>{localStorage.getItem('email')}</h4>
              <h3>생년월일</h3>
              <h4>
                {birthTxt.year} 년 {birthTxt.month} 월 {birthTxt.day} 일
              </h4>
              <button style={{color: "#fff"}} className='signup-modal-btn' onClick={() => setIsModalOpen(false)}>닫기</button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Nav