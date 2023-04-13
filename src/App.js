/* eslint-disable */

import logo from './logo.svg';
import './App.css';

// component by sbk930123('김승빈')
import Nav from './componentSBK/Nav'
import Mainbody from './componentSBK/Mainbody';
import Signup from './componentSBK/Signup';
import Login from './componentSBK/Login';
import Postwrite from './componentSBK/Postwrite';
import Postlist from './componentSBK/Postlist';
import Postdetail from './componentSBK/Postdetail';
import NintendoCSA from './componentCSA/NintendoCSA'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import About from './componentYRP/About';
import Aboutyr from './componentYRP/Aboutyr';
import Abouths from './componentYRP/Abouths';
import Aboutsa from './componentYRP/Aboutsa';
import Aboutsb from './componentYRP/Aboutsb';
import Aboutteam from './componentYRP/Aboutteam';

// component by HOSEONG15('인호성')
import Pspage from './componentIHS/Pspage';

// component by GrGrJe6jesse1('조성아')


function App() {

  const isLoggedIn = () => {
    const loggedIn = localStorage.getItem('loggedIn');
    return loggedIn === 'true';
  };

  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Nav>
        <Routes>
          <Route path='/' element={<Mainbody />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path='/post' element={<Postlist loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path='/post/write' element={<Postwrite />} />
          <Route path="/post/:postId" element={<Postdetail />} />
          <Route path='/ninpage' element={<NintendoCSA />} />
          <Route path='/pspage' element={<Pspage />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/yr' element={<Aboutyr />} />
          <Route path='/about/hs' element={<Abouths />} />
          <Route path='/about/sb' element={<Aboutsb />} />
          <Route path='/about/sa' element={<Aboutsa />} />
          <Route path='/about/team' element={<Aboutteam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
