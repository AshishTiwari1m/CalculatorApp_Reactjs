import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

import CalHeading from './Components/CalHeading';
import Calculator from './Components/Calculator';

ReactDom.render(
  <div className='calculator'>
    <CalHeading/>
    <Calculator/>
  </div>
,document.getElementById("root"));