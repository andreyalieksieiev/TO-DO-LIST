import React from 'react';

import { Item_li } from './styled';
// import './index.css';

const Item = ({ post, deleteMessage }) => {
  return (
    <Item_li className="item" onClick={() => deleteMessage(post.id)} key={post.id}>{post.text}</Item_li>
  )

}

export default Item;