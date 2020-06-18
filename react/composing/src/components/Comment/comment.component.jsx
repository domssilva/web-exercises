import React from 'react';
import faker from 'faker';

const Comment = props => (
  <div className="comment">
    <a href="/" className="avatar">
      <img src={faker.image.avatar()} alt="avatar"/>
    </a>
    <div className="content">
      <a href="/" className="author">{props.author}</a>
      <div className="metadata">
        <span className="date">Today at 6:00 PM</span>
      </div>
      <div className="text">
        <p>{faker.lorem.sentence()}</p>
      </div>
    </div>
  </div>
);

export default Comment;
