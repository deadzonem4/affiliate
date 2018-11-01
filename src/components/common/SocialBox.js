import React from "react";
import './styles/main.css';
import SocialText from './SocialText.js'

const SocialBox = (props) => {

  return (
    <div className="social-box">
      <div className="social-box-content">
        <div className="social-icons">

        </div>
        <SocialText/>
      </div>
    </div>
  );
}


export default SocialBox;