/* eslint-disable */

import React, { useEffect, useState } from "react";
import './style.css';
import gameData from './gamedata.json';
import Slider from "react-slick";
import Footer from "./Footer";


const Bodycontent = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(gameData.games)
  },[]);

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  return (
    <>
      <div className="Bodycontent">
        <Slider {...settings}>
          {
            games.map((a, i) => {
              return (
                <div key={i} className="slide-wrapper-content">
                  <h2>{a.title}</h2>
                  <div className="slide-wrapper-box">
                    {
                      a.items.map((b, i2) => {
                        return (
                          <div key={i2} className="slide-img-content">
                            <div className="slide-img-bg">
                              <div className="slide-img-item">
                                <img src={b.img} alt={b.name}></img>
                                <div className="slide-overlay">
                                  <div className="slide-overlay-item">
                                    <p>{b.name}</p>
                                    {
                                      b.logos.map((c, i3) => {
                                        return (
                                          <img key={i3} className="logo" src={c} alt={b.name}></img>
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
      <Footer />
    </>
  );
};

export default Bodycontent;