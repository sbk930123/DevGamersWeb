/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom'

const Aboutyr = () => {
  return (
    <div className="team-about-wrapper">
    <img className="nds-img" src="../imgYurim789/images/nintendo.png" alt="nintendo"></img>
    <div className="nds-content">
      <div className="team-about-top-content">
        <div className="team-about-Vertical-line"> </div>
          <h4>개발자 박유림</h4>
      </div>
      <div className="team-about-Horizontal-line"> </div>
  
      <div className="team-about-main-content">
        <div className="team-about-main-content-img">
          <img src="../imgYurim789/images/박유림.jpg" alt="logo"></img>
        </div>
        <div className="team-about-main-txt-box">
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>자기소개</h4>
            </div>
            <p className='about-txt-introduce'>웹 퍼블리셔가 되고싶은 개발자 박유림 입니다.<br></br>처음부터 퍼블리셔의 길을 걷게 된것은 아니지만<br></br>코딩을 배우기 시작하면서 제가 하고싶은 일을 찾게 되고<br></br>최근에는 Sass언어를 공부해서 페이지 만들때도 활용했어요.<br></br>아직 부족한 점이 많지만 배움을 게을리 하지 않고<br></br>열심히 공부하려고 합니다.
            </p>
          </div>
  
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>페이지 제작시 담당한 부분</h4>
            </div>
            <p className='about-txt-introduce'>'장르별 추천 게임', footer, 팀 소개 및 개인 소개 페이지의 제작을<br></br>담당했습니다. '장르별 추천 게임' 슬라이드에서는 4개의 슬라이드와<br></br>4개의 버튼으로 구성했고, footer는 가장 하단에 위치하고<br></br>게임에 대한 내용이 거의 들어가지 않기 때문에<br></br>최대한 심플하게 디자인 하려고 했어요.<br></br>그리고 팀 소개 및 개인소개 페이지는 '닌텐도 스위치'기기에<br></br>정보가 나오면 게임 소개 페이지라는 컨셉에 맞을 것 같아서<br></br>제작했어요. '닌텐도 스위치' 홈화면에서 게임을 고르는 것 처럼<br></br>팀 로고와 팀원들 사진을 넣고 클릭하면 팀 소개 페이지,<br></br>개인페이지로 이동하게 제작했습니다.</p>
          </div>
  
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>페이지를 만들면서 어려웠던점</h4>
            </div>
            <p className='about-txt-introduce'>닌텐도 스위치 위의 화면을 구현하는 것과 그 안의<br></br>스크롤 효과를 넣는 것에 어려움을 느꼈어요.<br></br>overflow:hidden기능을 알고 있었지만, 넘치는 텍스트를 숨기는<br></br>text-overflow:hidden 기능을 숙지해 활용했고,<br></br>닌텐도 스위치 기기에 어울리는 스크롤바를 디자인하고 싶어서<br></br>스크롤바를 디자인하는 css문법을 공부해서 적용했습니다.<br></br>팀프로젝트가 처음이다보니 페이지 제작 외에도<br></br>와이어프레임, PPT, 발표준비 등 처음 해보는것이 많아<br></br>어설프기도 했지만 다른 사람들과 협업하는 방법에 대해<br></br>알수있는 좋은 경험이었다고 생각합니다.</p>
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

export default Aboutyr