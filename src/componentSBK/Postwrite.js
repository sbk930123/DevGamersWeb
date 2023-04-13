/* eslint-disable */

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faX } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './Postwrite.css'
import axios from 'axios';

const Postwrite = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  const isValidContent = (content) => {
    const contentWithoutTags = content.replace(/(<([^>]+)>)/gi, '');
    return contentWithoutTags.trim().length > 0;
  };
  

  const handleSubmit = async () => {

    const author = localStorage.getItem("name");
    try {
      const response = await axios.post("http://localhost:4000/api/newPost", {
        author, // 작성자 정보 추가
        title,
        content: content,
      });
      alert("성공적으로 게시되었습니다.");
      navigate('/post')
    } catch (error) {
      console.error("Failed to upload post", error);
      alert("게시물 업로드에 실패했습니다.");
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, false] }],
      ['bold', 'underline'],
      [{ 'color': [] }, { 'background': [] }]
    ]
  }

  const formats = [
    'header',
    'bold', 'underline',
    'color', 'background',
  ]

  return (
    <div className='signup-wrapper'>
      <div className='postwrite-form'>
        <div className='back-nav'>
          <img src='../imgSbk930123/teamLogoWhite2.png'></img>
          <Link to="/post">
            <FontAwesomeIcon className='back-icon' icon={faArrowLeft} />
          </Link>
        </div>
        <div className='title-wrapper'>
          <h4>TITLE: </h4>
          <input
            type="text"
            className="post-title"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <ReactQuill
          style={{height: '60%'}}
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />
        <button
          type="submit"
          className="submit-btn"
          disabled={!title || !isValidContent(content)}
          onClick={handleSubmit}
        >
          작성
        </button>
      </div>
    </div>
  );
};

export default Postwrite;