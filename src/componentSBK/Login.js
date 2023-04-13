/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';

const initialValues = {
  email: '',
  password: '',
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = '◦ 이메일을 입력해주세요.';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = '◦ 올바른 이메일 형식이 아닙니다.';
  }

  if (!values.password) {
    errors.password = '◦ 비밀번호를 입력해주세요.';
  }

  return errors;
};

const Login = ({setLoggedIn}) => {
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showname, setShowname] = useState('');

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:4000/login', values);
      if (response.data.success) {
        const user = response.data.user;
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('email', values.email);
        localStorage.setItem('name', user.username);
        localStorage.setItem('birth', JSON.stringify(user.dateOfBirth));
        console.log(JSON.stringify(user.dateOfBirth));
        setShowname(user.username);
        setIsModalOpen(true);
        setLoggedIn(true);
      } else {
        setLoginFailed(true);
      }
    } catch (error) {
      console.error(error);
      setLoginFailed(true);
    }
    setSubmitting(false);
  };

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {(formik) => (
          <>
            <Form className="login-form">
              <div className='login-nav'>
                <img src='imgSbk930123/teamLogoWhite2.png'></img>
                <Link to="/">
                  <FontAwesomeIcon className='close-icon' icon={faX} />
                </Link>
              </div>  
              <div className='input-wrapper'>
                <div className="input-contents">
                  <label htmlFor="email" className='input-text'>@-MAIL</label>
                  <Field type="email" className="input-items" id="email" name="email" />
                  <div className='error-wrapper'>
                    <ErrorMessage name="email" component="div" />
                  </div>
                </div>
                <div className="input-contents">
                  <label htmlFor="password" className='input-text'>PASSWORD</label>
                  <Field type="password" className="input-items" id="password" name="password" />
                  <div className='error-wrapper'>
                    <ErrorMessage name="password" component="div" />
                  </div>
                </div>
                <div className='error-wrapper'>{loginFailed && <div>이메일과 비밀번호를 확인해주세요.</div>}</div>
                <button type="submit" className='submit-btn' disabled={!formik.isValid || formik.isSubmitting}>
                  로그인
                </button>
                <Link to="/signup"><button className='submit-btn'>회원가입</button></Link>
              </div>
            </Form>
            {isModalOpen && (
              <>
                <div className='signup-overlay'></div>
                <div className="signup-modal">
                  <div className="signup-modal-content">
                    <div className='signup-modal-img-box'><img src='imgSbk930123/teamLogoWhite2.png'></img></div>
                    <h1 style={{marginTop: "20px"}}>{showname} 님 ! 환영합니다 !</h1>
                    <p>아래 버튼을 누르면 메인페이지로 이동합니다.</p>
                    <Link to="/"><button style={{color: "#fff"}} className='signup-modal-btn' onClick={() => setIsModalOpen(false)}>닫기</button></Link>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </Formik>
    </div>
  );
};

export default Login;