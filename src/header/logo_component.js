import React from 'react';
import './header_style.css';

function Logo() {
  return (
    <nav>
        <div className="logo">
            <a href="https://www.youtube.com/?hl=uk&gl=UA">
            <img className="logoFrame" src="images/icon.jpg" alt=""/>
            </a>
        </div>
    </nav>
  );
}

export default Logo;