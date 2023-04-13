/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom'

const Aboutteam = () => {
  return (
    <div className="team-about-wrapper">
    <img className="nds-img" src="../imgYurim789/images/nintendo.png" alt="nintendo"></img>
    <div className="nds-content">
      <div className="team-about-top-content">
        <div className="team-about-Vertical-line"> </div>
          <h4>Team DevGamers</h4>
      </div>
      <div className="team-about-Horizontal-line"> </div>
  
      <div className="team-about-main-content">
        <div className="team-about-main-content-img">
          <img src="../imgYurim789/images/team logo black full.png" alt="logo"></img>
        </div>
        <div className="team-about-main-txt-box">
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>팀 소개</h4>
            </div>
            <p className='about-txt-introduce'>네명의 게임을 좋아하는 개발자들로 이루어진<br></br>팀 <strong>DEV GAMERS</strong>입니다!<br></br>다들 게임을 좋아하지만 각자 좋아하는 컨셉이나 장르,<br></br>선호하는 플랫폼이 달라서 다양한 아이디어가 나왔고<br></br>그 아이디어를 바탕으로 각자의 취향과 역량에 맞추어<br></br>역할을 분담해 페이지를 제작했습니다.
            </p>
          </div>
  
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>페이지 소개</h4>
            </div>
            <p className='about-txt-introduce'>우리 페이지에서는 게임을 즐기는 게이머들에게<br></br>PlayStation, Nintendo Switch, Steam의 게임 정보를 제공하고<br></br>취향에 맞는 게임을 찾을 때도 도움이 되고자 제작하였습니다.<br></br>플랫폼에 따른 게임 정보 뿐만 아니라 곧 출시 예정인 게임들,<br></br>장르별 게임, 다양한 인게임 스크린샷 등의 정보를 제공합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="team-about-Horizontal-line"> </div>
      <div className="team-about-footer">
        <a href="https://github.com/yurim789" target="_blank"><img src="../imgYurim789/images/github.png" alt="github logo"></img></a>
        <Link to='/about' className="about-footer-btn-box team-about-btn-list">
          <div className="about-footer-btn"><p>B</p></div>
          <p>뒤로</p>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Aboutteam