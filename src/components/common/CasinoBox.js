import React from "react";
import './styles/main.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const CasinoBox = (props) => {

  return (
    <div className="casino-box">
      <div className="logo-box-content">
        <div className="casino-box-text">
          <h4>{props.title}</h4>
          <p>{props.text}</p>
        </div>
        <div className="casino">
          <a rel="noopener noreferrer" target="_blank" href="https://affiliates.winbetaffiliates.bg/signup.php">
            {props.secOne}
            <img src={logo}  alt="Affiliate"/>
        	</a>
        </div>
        <div className="sport">
          <a rel="noopener noreferrer" target="_blank" href="https://affiliates.winbetaffiliates.bg/signup.php">
            {props.secTwo}
            <img src={logo}  alt="Affiliate"/>
          </a>
        </div>
        <div className="casino-live">
          <a rel="noopener noreferrer" target="_blank" href="https://affiliates.winbetaffiliates.bg/signup.php">
            {props.secThree}
            <img src={logo}  alt="Affiliate"/>
          </a>
        </div>
      </div>
    </div>
  );
}


export default CasinoBox;