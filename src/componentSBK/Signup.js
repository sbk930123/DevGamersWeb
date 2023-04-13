/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  dateOfBirth: {
    day: '',
    month: '',
    year: '',
  }
};

const currentYear = new Date().getFullYear(); 

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = '◦ 이름을 입력해주세요.';
  }

  if (!values.email) {
    errors.email = '◦ 이메일을 입력해주세요.';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = '◦ 올바른 이메일 형식이 아닙니다.';
  }

  if (!values.password) {
    errors.password = '◦ 비밀번호를 입력해주세요.';
  } else if (values.password.length < 8) {
    errors.password = '◦ 비밀번호는 8자리 이상이어야 합니다.';
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = '◦ 비밀번호는 대문자를 포함해야 합니다.';
  } else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(values.password)) {
    errors.password = '◦ 비밀번호는 특수문자를 포함해야 합니다.';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = '◦ 비밀번호를 확인해주세요.';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = '◦ 비밀번호가 일치하지 않습니다.';
  }

  if (!values.dateOfBirth.day || !values.dateOfBirth.month || !values.dateOfBirth.year) {
    errors.dateOfBirth = '◦ 생년월일을 입력해주세요.';
  }

  return errors;
};

const Signup = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showname, setShowname] = useState('');
  const [isEmailDuplicateChecked, setIsEmailDuplicateChecked] = useState(false); 
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(null);
  const [emailFieldBlurred, setEmailFieldBlurred] = useState(false);

  const handleCheckDuplicate = async (event, email) => {
    event.preventDefault();
    if (!email) {
      alert('◦ 이메일을 입력해주세요.');
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      alert('◦ 올바른 이메일 형식이 아닙니다.');
      return false;
    } else {
      try {
        const isDuplicateResponse = await axios.post('http://localhost:4000/api/checkDuplicate', { email });
        const isDuplicate = !!isDuplicateResponse.data.isDuplicate;
        if (isDuplicate) {
          alert('이미 등록된 이메일입니다.');
          setIsEmailDuplicate(true);
        } else {
          alert('사용 가능한 이메일입니다.');
          setIsEmailDuplicate(false);
        }
        setIsEmailDuplicateChecked(true);
        return isDuplicate;
      } catch (error) {
        console.error(error);
        alert('서버와의 통신에 실패했습니다.');
        return undefined;
      }
    }
  };
  

  const onSubmit = async (values, { resetForm }) => {
    const { username, email, password, dateOfBirth, phoneNumber } = values;
  
    if (isEmailDuplicate === null) {
      alert('이메일 중복확인을 해주세요.');
      return;
    }
  
    if (isEmailDuplicate) {
      alert('이미 등록된 이메일입니다.');
    } else {
      try {
        await axios.post('http://localhost:4000/signup', { username, email, password, dateOfBirth, phoneNumber });
        setShowname(username);
        setIsModalOpen(true);
        resetForm();
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <div className="signup-wrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {(formik) => (
          <>   
            <Form className="signup-form" onSubmit={formik.handleSubmit}>
              <div className='signup-nav'>
                <img src='imgSbk930123/teamLogoWhite2.png'></img>
                <Link to="/">
                  <FontAwesomeIcon className='close-icon' icon={faX} />
                </Link>
              </div>
              <div className="input-wrapper">
                <div className='input-contents'>
                  <label htmlFor="username" className={`input-text`}>USERNAME</label>
                  <Field className="input-items" type="text" id="username" name="username" placeholder="ex) 김승빈, 인호성, 박유림, 조성아" />
                  <div className='error-wrapper'>
                    <ErrorMessage className="error-message" name="username" component="div" />
                  </div>
                </div>
                <div className='input-contents'>
                  <label htmlFor="email" className='input-text'>@-MAIL</label>
                  <div className='e-mail-wrapper'>
                    <Field className="input-items" type="email" id="email" name="email" placeholder="ex) Email@naver.com" onFocus={() => setEmailFieldBlurred(true)} />
                    <div className='doublecheck' onClick={(event) => {handleCheckDuplicate(event, formik.values.email)}}>중복확인</div>
                  </div>
                  
                  <div className='error-wrapper dcheck-error'>
                    <ErrorMessage className="error-message" name="email" component="div" />
                    {emailFieldBlurred && !isEmailDuplicateChecked && (
                      <div className="error-message">◦ 중복확인</div>
                    )}
                  </div>
                </div>
                <div className='input-contents'>
                  <label htmlFor="password" className='input-text'>PASSWORD</label>
                  <Field className="input-items" type="password" id="password" name="password" placeholder="대문자와 특수기호를 포함" />
                  <div className='error-wrapper'>
                    <ErrorMessage className="error-message" name="password" component="div" />
                  </div>
                </div>
                <div className='input-contents'>
                  <label htmlFor="confirmPassword" className='input-text'>PASSWORD CONFIRM</label>
                  <Field className="input-items" type="password" id="confirmPassword" name="confirmPassword" placeholder="비밀번호 확인" />
                  <div className='error-wrapper'>
                    <ErrorMessage className="error-message" name="confirmPassword" component="div" />
                  </div>
                </div>
                <div className='input-contents'>
                  <label htmlFor="dayOfBirth" className='input-text'>BIRTH</label>
                  <div className="date-selector">
                    <Field as="select" id="yearOfBirth" name="dateOfBirth.year" className="birth-items">
                      <option value="">년도</option>
                      {Array.from({ length: currentYear - 1950 + 1 }, (_, i) => {
                        const year = currentYear - i;
                        return <option key={year} value={year}>{year}</option>;
                      })}
                    </Field>
                    <Field as="select" id="monthOfBirth" name="dateOfBirth.month" className="birth-items">
                      <option value="">월</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </Field>
                    <Field as="select" id="dayOfBirth" name="dateOfBirth.day" className="birth-items">
                      <option value="">일</option>
                      {Array.from({ length: 31 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </Field>   
                  </div>
                  <div className='error-wrapper'>
                    <ErrorMessage className="error-message" name="dateOfBirth" component="div" />
                  </div>
                </div>
                <button className='submit-btn' type="submit" disabled={!formik.isValid || !isEmailDuplicateChecked || isEmailDuplicate}>
                  Sign Up
                </button>
              </div>
            </Form>
            {isModalOpen && (
              <>
                <div className='signup-overlay'></div>
                <div className="signup-modal">
                  <div className="signup-modal-content">
                    <div className='signup-modal-img-box'><img src='imgSbk930123/teamLogoWhite2.png'></img></div>
                    <h1 style={{marginTop: "20px"}}>{showname} 님 ! 반갑습니다 !</h1>
                    <p>아래 버튼을 누르면 로그인 페이지로 이동합니다.</p>
                    <Link to="/login"><button style={{color: "#fff"}} className='signup-modal-btn' onClick={() => setIsModalOpen(false)}>로그인</button></Link>
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

export default Signup