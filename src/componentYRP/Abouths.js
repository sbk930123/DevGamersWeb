/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom'

const Abouths = () => {
  return (
    <div className="team-about-wrapper">
    <img className="nds-img" src="../imgYurim789/images/nintendo.png" alt="nintendo"></img>
    <div className="nds-content">
      <div className="team-about-top-content">
        <div className="team-about-Vertical-line"> </div>
          <h4>개발자 인호성</h4>
      </div>
      <div className="team-about-Horizontal-line"> </div>
  
      <div className="team-about-main-content">
        <div className="team-about-main-content-img">
          <img src="../imgYurim789/images/인호성.jpeg" alt="logo"></img>
        </div>
        <div className="team-about-main-txt-box">
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>자기소개</h4>
            </div>
            <p className='about-txt-introduce'>안녕하세요. 이번 리액트 프로그램을 수강중인 인호성입니다.<br></br>리액트를 사용하여 간단한 웹페이지를 개발 해보았을때<br></br>짧은 시간이었지만 많은것을 배웠고,<br></br>부족한 면을 많이 알았던거 같습니다.<br></br>더 많이 노력하고 더 공부하여 지금보다 좋은 개발자가 되겠습니다.
            </p>
          </div>
  
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>페이지 제작시 담당한 부분</h4>
            </div>
            <p className='about-txt-introduce'>이번 프로젝트에서 React를 사용해 PlayStation이라는플랫폼에서<br></br>독점작, 유명한 게임중에서 제가 직접 플레이를 했었던<br></br>게임을 소개하고, 설명하는 것을 담당했습니다.<br></br>매력있고 개성이 강한 캐릭터들을 자세히 소개하기 위해서<br></br>각 게임 썸네일 이미지 하단의 자세히보기 버튼을 클릭하면<br></br>게임 스크린샷과 영상이 재생되게 하였고,<br></br>카드를 뒤집는듯한 효과와 모달창을 이용해<br></br>유저에게 게임의 간략한 스토리와 유저 평점등의<br></br>정보를 제공했습니다.
            </p>
          </div>
  
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>페이지를 만들면서 어려웠던점</h4>
            </div>
            <p className='about-txt-introduce'>PlayStation 페이지 컨셉에 맞는 디자인을 구상하고 싶었고<br></br>소개하고싶은 게임들의 컨셉을 각각 다르게 하고 싶었지만<br></br>얼마동안 창의적인 아이디어가 나오지 않아 고민했습니다.<br></br>그래서 꼭 PlayStation 게임들의 컨셉에만 국한되지않고<br></br>다양한 사이트들과 게임 디자인들을 참고하여 슬럼프를<br></br>극복할 수 있었습니다.
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

export default Abouths