/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom'

const Aboutsb = () => {
  return (
    <div className="team-about-wrapper">
    <img className="nds-img" src="../imgYurim789/images/nintendo.png" alt="nintendo"></img>
    <div className="nds-content">
      <div className="team-about-top-content">
        <div className="team-about-Vertical-line"> </div>
          <h4>개발자 김승빈</h4>
      </div>
      <div className="team-about-Horizontal-line"> </div>
  
      <div className="team-about-main-content">
        <div className="team-about-main-content-img">
          <img src="../imgYurim789/images/김승빈.JPG" alt="logo"></img>
        </div>
        <div className="team-about-main-txt-box">
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>자기소개</h4>
            </div>
            <p className='about-txt-introduce'>저는이번 팀 프로젝트에서 팀장을 맡은 개발자 김승빈입니다.<br></br>저는 개발자 교육과 훈련을 통해 코딩에 흥미를 느끼고<br></br>다양한 기능을 구현하고자 새로운 언어와 기술에 대한<br></br>호기심과 열정을 가지고 있습니다.<br></br>또한 협업에 대한 중요성을 인지하고 있으며,<br></br>다른 개발자들과 함께 일하며<br></br>더 나은 결과를 만들어 내는것을 좋아합니다.
            </p>
          </div>
  
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>페이지 제작시 담당한 부분</h4>
            </div>
            <p className='about-txt-introduce'>React를 활용한 메인페이지의 디자인과 기능구현,<br></br>로그인과 회원가입 기능을 백엔드 기술을 활용해<br></br>데이터베이스와 연동하여 사용자 정보와<br></br>컨텐츠를 관리할수있게 했습니다.<br></br>또, API를 활용한 게시판 기능을 구현하고<br></br>다른 개발자들과 원활한 협업을 통해<br></br>프로젝트의 일정과 진행 상황을 관리하였습니다.
            </p>
          </div>
  
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>페이지를 만들면서 어려웠던점</h4>
            </div>
            <p className='about-txt-introduce'>처음하는 프로젝트에서 팀장이라는 중요한 역할을 맡아<br></br>초반에는 책임감을 많이 느꼈지만 평소 활발하고 사람들과<br></br>소통을 좋아하는 성격덕에 팀원들과 원활하게 소통할수 있었습니다.<br></br>기술적인 면에서 구상중인것을 구현할때 크게 어려운 점은 없었지만,<br></br>게시판 기능을 구현하던 중 저장 실수로 작업물이 저장되지 않아<br></br>크게 낙담한적이 있습니다. 하지만 포기하지않고 처음부터<br></br>다시 시작해보기로 결심했고, 그 끝에 구상한데로 게시판 기능을<br></br>완성 할 수 있었습니다. 밤새 열심히 작업한 작업물을 실수로<br></br>삭제해버린것은 매우 당황스러운 일이었지만<br></br>Github 커밋을 꼼꼼히 하는 습관에 대한 중요성을 배울 수 있었습니다.
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

export default Aboutsb