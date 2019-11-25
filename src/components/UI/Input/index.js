import React from 'react';

import { Input_input } from './styled';
// import './index.css';

const Input = ({ changed, value }) => (
   <Input_input onChange={changed} value={value} className="input"></Input_input>
)

export default Input;