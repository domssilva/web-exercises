import React from 'react';

import './card.scss';

const Card = ({user}) => {

  let today = new Date().toLocaleDateString();
  let randomPic = "https://picsum.photos/200/300";

  return (
    <section className="section__card">
      <div className="section__card-title">
        <div className="section__card-image-container">
          <img 
            className="section__card-image" 
            src={randomPic} alt="random pic" 
          />
        </div>
        <div className="section__card-user">
          <small>{today}</small>
          <h1>{user.username} says:</h1>
        </div>
      </div>
      <div className="card__body">
        <div className="card__body-post">
          <p>{user.posts[0]}</p>
        </div>
        <div className="card__body-options">
          <a href="#">
            <i className="fa fa-thumbs-up" id="like" aria-hidden="true" />
            <small>{user.likes}</small>
          </a>
          <a href="#">
            <i className="fa fa-thumbs-down" id="dislike" aria-hidden="true" />
            <small>{user.dislikes}</small>
          </a>
          <a href="#">
            <svg
              className="bi bi-chat"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"id="like"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.678 11.894a1 1 0 01.287.801 10.97 10.97 0 01-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 01.71-.074A8.06 8.06 0 008 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 01-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 00.244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Card;
