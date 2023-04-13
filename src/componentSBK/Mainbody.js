/* eslint-disable */

import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react'
import './Mainbody.css'
import '../font/font.css'
import Bodycontent from '../componentYRP/Bodycontent';
import { Link } from 'react-scroll';
import billboard from './billboard.json'
import { useNavigate } from 'react-router-dom';


function Mainbody() {
  let [showHb, setShowHb] = useState(false);
  let [showHb2, setShowHb2] = useState(false);
  let [showHb3, setShowHb3] = useState(false);
  let [showHt, setShowHt] = useState(false);
  const navigate = useNavigate();

  let [boardtxt, setBoardtxt] = useState([]);

  useEffect(() => {
    setBoardtxt(billboard.billboard)
  },[]);

  useEffect(() => {
    let timeoutHb = setTimeout(() => {
      setShowHb(true);
    }, 2750);
  
    return () => {
      clearTimeout(timeoutHb);
    }
  }, []);

  useEffect(() => {
    let timeoutHb = setTimeout(() => {
      setShowHb2(true);
    }, 3250);
  
    return () => {
      clearTimeout(timeoutHb);
    }
  }, []);

  useEffect(() => {
    let timeoutHb = setTimeout(() => {
      setShowHb3(true);
    }, 3750);
  
    return () => {
      clearTimeout(timeoutHb);
    }
  }, []);
  
  useEffect(() => {
    let timeoutHt = setTimeout(() => {
      setShowHt(true);
    }, 4250);
  
    return () => {
      clearTimeout(timeoutHt);
    }
  }, []);

  return (
    <div className='Mainbody'>
      <div className='header-bg'>
        <div className='bg-limit'>
          <div className={`bg-title ${ showHt ? '' : 'hidden'}`}>
            <h1>다수의 <span style={{color: 'gold', letterSpacing: '2px'}}>GOTY</span> 게임들 !</h1>
            <h4>여러분의 게임 선호도를 충족시킬 수 있는 게임을 추천해드립니다.</h4>
            <h4>GOTY 수상 경력이 있는 게임을 포함하여 다양한 추천 게임을 만나보세요.</h4>
            <Link to='Bodycontent' smooth={true} offset={-50}>
              <h4 className='turnTxt'>지금 바로 즐길 준비가 되셨나요?</h4>
            </Link>
          </div>
          <div className="img-box hidden">
            <img className={`bg-img ${ showHb ? '' : 'hidden' }`} src='imgSbk930123/hbnintendo.png'></img>
            <img className={`bg-img ${ showHb2 ? '' : 'hidden' }`} src='imgSbk930123/hbplaystation.jpg'></img>
            <img className={`bg-img ${ showHb3 ? '' : 'hidden' }`} src='imgSbk930123/hbsteam.png'></img>
          </div>
        </div>
      </div>
      <div className='sub-info-wrapper'>
        <div className='sub-info'>
          <h4>COMING SOON !</h4>
          <div className='board-wrapper'>
            {
              boardtxt.map((a, i) => {
                return (
                  <p key={i}>{boardtxt[i]['text']}</p>
                )
              })
            }
          </div>
        </div>
        <div className='sub-info info-item2'></div>
      </div>
      <div className='body-bg'>
        <img src='imgSbk930123/welcomebg2.png'></img>
      </div>
      <Bodycontent id="Bodycontent" />
    </div>
  )
}

export default Mainbody