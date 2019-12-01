import React from 'react';

import { Input_input } from './styled';

const Input = ({ changed, value }) => (
   <Input_input onChange={changed} value={value}></Input_input>
)

export default Input;