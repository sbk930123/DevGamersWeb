/* eslint-disable */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Postlist.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPen, faX } from '@fortawesome/free-solid-svg-icons';

const Postlist = ({ loggedIn, setLoggedIn }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/getPosts');
        setPosts(response.data.posts.reverse()); // 게시물 목록을 역순으로 정렬
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    };
  
    fetchPosts();
  }, []);

  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const displayPosts = posts
  .slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)
  .map((post, index) => {
    return (
      <div
        key={index}
        className="post-item"
        onClick={() => handlePostClick(post.postId)} // 여기에 onClick 이벤트를 추가합니다.
      >
        <h3>{post.title}</h3>
        <p>작성자: {post.author}</p>
      </div>
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="postlist-wrapper">
      <div className="postlist-container">
        <div className='back-nav'>
          <img src='../imgSbk930123/teamLogoWhite2.png'></img>
          <Link to="/">
            <FontAwesomeIcon className='back-icon' icon={faArrowLeft} />
          </Link>
        </div>
        <div className="row postlist-item-wrapper">{displayPosts}</div>
        <div className='rel-box'>
          <div className='pagenate-wrapper'>
            <ReactPaginate
              previousLabel={'이전 페이지'}
              nextLabel={'다음 페이지'}
              breakLabel={'...'}
              pageCount={Math.ceil(posts.length / postsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
            />
            {
            loggedIn ? (
                <>
                  <Link to='/post/write'><FontAwesomeIcon className='pen-icon' icon={faPen} /></Link>
                </>
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postlist;