import React from 'react';
import ReactDOM from 'react-dom';
import './header/header_style.css';

import InteractiveIcons from './interactiveIcons/interactiveIcons.js';
import CommentForm from './htmlForm/commentForm.js'
import InfoText from './infoText/infoText.js'
import ImgSlider from './imgSlider/slider';
import Dropdown from './header/dropdown_menu.js';
import Logo from './header/logo_component.js';
import HeaderText from './header/text_component';

ReactDOM.render(
  <React.StrictMode>
    <Logo />
    <HeaderText />
    <Dropdown />
    <ImgSlider />
    <InteractiveIcons />
    <InfoText />
    <CommentForm />
  </React.StrictMode>,
  document.getElementById('root')
);

