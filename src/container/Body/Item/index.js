import React from 'react';

import { Item_li } from './styled';

const Item = ({ post, deleteMessage }) => {
  return (
    <div>
      <Item_li onClick={() => deleteMessage(post.id)} key={post.id}>{post.text}</Item_li>
    </div>
  )
}

export default Item;