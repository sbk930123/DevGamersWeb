/* eslint-disable */

import React from 'react'
import { Link } from 'react-router-dom'

const Aboutsa = () => {
  return (
    <div className="team-about-wrapper">
    <img className="nds-img" src="../imgYurim789/images/nintendo.png" alt="nintendo"></img>
    <div className="nds-content">
      <div className="team-about-top-content">
        <div className="team-about-Vertical-line"> </div>
          <h4>개발자 조성아</h4>
      </div>
      <div className="team-about-Horizontal-line"> </div>
  
      <div className="team-about-main-content">
        <div className="team-about-main-content-img">
          <img src="../imgYurim789/images/조성아.JPG" alt="logo"></img>
        </div>
        <div className="team-about-main-txt-box">
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>자기소개</h4>
            </div>
            <p className='about-txt-introduce'>리액트 네이티브 실무과정반 DevGamers 팀의 조성아입니다.<br></br>이번 기회에 수업을 들으며 개발자 업무에 관심이 생기게 되었고<br></br>정보를 얻어가며 원래부터 관심이 많았던<br></br>게임 개발쪽으로 꿈을 가지게 되었습니다.
            </p>
          </div>
  
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>페이지 제작시 담당한 부분</h4>
            </div>
            <p className='about-txt-introduce'>이번 팀 프로젝트로 게임 소개 사이트의 닌텐도에 관한<br></br>소개 페이지를 디자인하고 만들게 되었습니다.<br></br>각종 게임 관련 사이트를 돌아다니며 참고하여<br></br>웰컴페이지를 대표캐릭터로 구성하게 되었고<br></br>각 대표 독점 타이틀 소개페이지는 닌텐도와<br></br>관련된 다양한 게임들의 크로스오버 난투격투게임인<br></br>스매시 브라더스의 캐릭터 소개페이지를 참고하여 만들었습니다.
            </p>
          </div>
  
          <div className="team-about-main-txt">
            <div className="team-about-main-title">
              <div className="team-about-Vertical-line"></div>
              <h4>페이지를 만들면서 어려웠던점</h4>
            </div>
            <p className='about-txt-introduce'>스매시브라더스의 소개페이지는 각각 다른 페이지로 이동하는데<br></br>저는 이번에 한 페이지 안에서 구현하려다 보니 모달기능을<br></br>사용하였습니다. 리액트과정 수업시작하고<br></br>실력면에서 많은 부족함을 느꼈다보니<br></br>전체적으로도 어려웠지만 특히나 이 컴포넌트를 이용한<br></br>모달을 구현하면서 json으로 작성한<br></br>데이터를 불러오는 작업에서 오류가 많이 발생해서 고전했습니다.<br></br>앞으로는 더 자가학습을 열심히 해서 각종 기능구현을<br></br>숙지해 나가고자 합니다.
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

export default Aboutsa