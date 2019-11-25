import React from 'react';

import Item from './Item';
import { Body_ul } from './styled';

const Body = ({ messages, deleteMessage }) => {
  let items = messages.map(post => <Item post={post} key={post.id} deleteMessage={deleteMessage} />)
  return (
    <Body_ul className="body">{items}</Body_ul>
  )
}

export default Body;