/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Postdetail.css'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faX, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Postdetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/posts/${postId}`);
        setPost(response.data.post);
      } catch (error) {
        console.error('Failed to fetch post', error);
      }
    };
  
    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>로딩중...</div>;
  }

  return (
    <div className='post-wrapper'>    
      <div className='post-item-wrapper'>
        <div className='back-nav'>
          <img src='../imgSbk930123/teamLogoWhite2.png'></img>
          <Link to="/post">
            <FontAwesomeIcon className='back-icon' icon={faArrowLeft} />
          </Link>
        </div>
        <div className='detail-item'>
          <h2 className='post-title'>{post.title}</h2>
          <p>작성자: {post.author}</p>
        </div>
        <div className='detail-item-txt' dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </div>
  );
};

export default Postdetail;