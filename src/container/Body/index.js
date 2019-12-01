import React from 'react';

import Item from './Item';
import { Body_ul } from './styled';

const Body = ({ messages, deleteMessage }) => {
  let items = messages.map(post => <Item post={post} key={post.id} deleteMessage={deleteMessage} />)
  return (
    <div>
      <Body_ul>{items}</Body_ul>
    </div>
  )
}

export default Body;