import React from 'react';

import './index.css';

const Input = ({ changed, value }) => (
   <input onChange={changed} value={value} className="input"></input>
)

export default Input;