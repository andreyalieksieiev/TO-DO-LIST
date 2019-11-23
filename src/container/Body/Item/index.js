import React from 'react';

import './index.css';

const Item = ({ post, deleteMessage }) => {
  return (
    <li className="item" onClick={() => deleteMessage(post.id)} key={post.id}>{post.text}</li>
  )

}

export default Item;