import React from 'react';
import './header_style.css';

function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
  }

  function Dropdown() {
    return (
        <div className="dropdown">
          <ul className="dropbtn icons btn-right showLeft" onClick={showDropdown}>
            <li></li>
            <li></li>
            <li></li>
          </ul>

        <div id="myDropdown" className="dropdown-content">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        </div>
    );}

    export default Dropdown;