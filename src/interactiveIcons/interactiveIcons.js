import React, { useState } from 'react';
import './interactiveIcons.css'

let countLikes = 0;

function InteractiveIcons() {

    const heartPic=<img src="images/heart.png" alt="" className="heart" />;
    const heartPic2=<img src="images/heart2.png" alt="" className="heart2" />;

    const[heartChange, setHeartChange] = useState(heartPic);
    const[like, setLike] = useState(0);
    

    function hearts () {
        picture();
        likes();
    }

    function picture () {
            if(like%2===0) setHeartChange(heartPic2); 
            else setHeartChange(heartPic);
    }

    function likes () {
        setLike(like+1);
    }
        if(like%2===0) countLikes=0;
        else (countLikes=1);

    return (
        <div>
        <div className="interactive-icons">
            <button className="heartButton" onClick={hearts}> {heartChange} </button>
            <img src="images/sms.jpg" alt="" className="sms" />
            <img src="images/call.jpg" alt="" className="call" />
        </div>
        <p className="nravitsa">{countLikes} отметок "Нравится"</p>
        </div>
    );
  }

  export default InteractiveIcons;