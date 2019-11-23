import React from 'react';

import Item from './Item';
import './index.css';

const Body = ({ messages, deleteMessage }) => {
  let items = messages.map(post => <Item post={post} key={post.id} deleteMessage={deleteMessage} />)
  return (
    <ul className="body">{items}</ul>
  )
}

export default Body;