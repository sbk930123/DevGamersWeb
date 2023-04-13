/* eslint-disable */

import React from 'react'
import './NintendoCSA.css'
import NInTitleCSA from './NInTitleCSA'
import NinGameDB from './NinGameDB.json'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const NintendoCSA = () => {
  const [nintendoTitle, setNintendoTitle] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    setNintendoTitle(NinGameDB, nintendoTitle)
  },[]);

  const [showModal, setShowModal] = useState(false);
  const openModal = (temp) => {
    setIndex(temp)
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  

  return (
    <Container className='nin-wrapper'>
      <Row className="nin-wi">
        {/* 웰컴이미지 - 몇가지 소프트타이틀 이미지 편집해서 생성 */}
        {/* 디자인 수정 웰컴이미지 정가운데 로고를 중심으로 독점타이틀 캐릭터들 바깥에서 */}
        {/* 축소이미지 페이드아웃 애니메이션 효과 */}
        {/* 클릭시 각 시리즈 모달 발생 */}

        {/* 메트로이드 */}
        <Col className='WELCOME-SAMUS' onClick={() => openModal(0)}></Col>
        {/* 젤다 */}
        <Col className='WELCOME-Link' onClick={() => openModal(1)}></Col>
        {/* 마리오 */}
        <Col className='WELCOME-MARIO' onClick={() => openModal(2)}></Col>
        {/* 파이어엠블렘 */}
        <Col className='WELCOME-Alear' onClick={() => openModal(3)}></Col>
        {/* 스플래툰 */}
        <Col className='WELCOME-Inkling' onClick={() => openModal(4)}></Col>
        {/* 로고 */}
        <Col className='WELCOME-Logo'></Col>
        {/* 커비 */}
        <Col className='WELCOME-Kirby' onClick={() => openModal(5)}></Col>
        {/* 동숲 */}
        <Col className='WELCOME-villager' onClick={() => openModal(6)}></Col>
        {/* 포켓몬 */}
        <Col className='WELCOME-pikachu' onClick={() => openModal(7)}></Col>

        {/* 모달 */}
        {
          showModal == true ? 
          <div className='modalback' onClick={closeModal}>
            <Col className='nin-modal' onClick={e => e.stopPropagation()}>
              {nintendoTitle && < NInTitleCSA nintendoTitle={nintendoTitle} gameName={index}/>}
            </Col>
          </div> : null
        }
      </Row>
    </Container>
  )
}

export default NintendoCSA
