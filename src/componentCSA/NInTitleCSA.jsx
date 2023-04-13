/* eslint-disable */

import React from 'react'
import './NInTitleCSA.css'
import NinGameDB from './NinGameDB.json'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const NInTitleCSA = ({gameName}) => {
  const [nintendoTitle, setNintendoTitle] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    setNintendoTitle(NinGameDB, nintendoTitle)
  },[]);

  const SSLIST = NinGameDB.nintendoTitle[gameName].SSList
  const ETCLIST = NinGameDB.nintendoTitle[gameName].ETCList

  const [viewModal, setviewModal] = useState(false);
  const SSModal = () => {
    setviewModal(true);
  }
  const closeSSModal = () => {
    setviewModal(false);
  }


  const [ETCmodal, setetcModal] = useState(false);
  const etcTTModal = (temp) => {
    setIndex(temp)
    setetcModal(true);
  }
  const closeetcModal = () => {
    setetcModal(false);
  }


  return (
    <Container className='title-container'>
        <Row className='title-back' style={{position: 'relative', width: '100%', height: "100%", overflow: 'hidden', borderRadius: '10px'}}>
          {/* 백그라운드 이미지 */}
          <img src={NinGameDB.nintendoTitle[gameName].back} style={{width: '100%', height: "100%"}} alt="background" />
          <Col className='nin-game-title'>
            <img src={NinGameDB.nintendoTitle[gameName].titleLogo} style={{width: '300px', animation: 'logo 1s'}} alt="logo" />
            <p className='intro'>{NinGameDB.nintendoTitle[gameName].intro}</p>
          </Col>
          <Col className='nin-chara'>
            {/* 타이틀 캐릭터 이미지 */}
          <img src={NinGameDB.nintendoTitle[gameName].chara} style={{width: '100%'}} alt="chara" />
          </Col>
          {/* 겜스샷 3~4장 */}
          <div className='nin-Sshot'>
            {
              SSLIST.map(function(a, img){
                return(
                  <div className='nin-sw-Sshot' onClick={SSModal} key={img}>
                    {/* <h1>클릭시 스크린샷 모달 생성</h1> */}
                    <img className='ninGameSS' src={a.img} key={img} alt="screenshot" />
                  </div>  
                )
              })
            }
          </div>
          { viewModal == true ? 
              <div className='SSback' onClick={closeSSModal}></div>   
            : null }
            { viewModal == true ? 
              <div className='largeSS' onClick={e => e.stopPropagation()}>
                {SSLIST.map(function(a, img){
                  return(
                    <img className='LninGameSS' src={a.img} key={img} alt="zelda-screenshot" />
                  )
                })}
              </div> 
            : null }
          {/* 시리즈게임 */}
          <div className='nin-series'>
            <div className='series-title' onClick={etcTTModal}>
            {nintendoTitle && <img src={NinGameDB.nintendoTitle[gameName].symbol} style={{width: '100%', height: "100%"}} alt="series" />}
              {/* <p>기타타이틀 모달</p> */}
            </div>
            { ETCmodal == true ? 
              <div className='SSback' onClick={closeetcModal}></div>   
            : null }
            {
              ETCmodal == true ? 
              <div className='title-modal' onClick={e => e.stopPropagation()}>
                {ETCLIST.map(function(a, img){
                  return(
                    <img className="nin-sw-item" src={a.img} key={img} alt="etc" />
                  )
                })}
              </div> : null
            }
          </div>
        </Row>
    </Container>
  )
}

export default NInTitleCSA
