import React from 'react';

import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

const Header = ({ inputChange, addPost, value }) => {
  return(
    <div>
      <Input changed={inputChange} value={value} />
      <Button clicked={addPost} name="Add" />
    </div>
  )
}

export default Header;