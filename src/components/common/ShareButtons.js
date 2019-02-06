import React from "react";
import './styles/main.css';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  ViberShareButton,
  TwitterShareButton,
} from 'react-share';

const SocialIcons = (props) => {
  return (
    <ul className={"social-icons " + props.col}>
      <li className="social-item">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/winbet.bg.online/">
          <i className="fab fa-facebook-f"></i>
          <FacebookShareButton url={props.link}/>
        </a>
      </li>
      <li className="social-item">
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/winbet.online.casino/">
          <i className="fab fa-twitter"></i>
          <TwitterShareButton url={props.link}/>
        </a>
      </li>
      <li className="social-item">
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCPP2j-r6BqACf-EUbEIx0Pg">
          <i className="fab fa-viber"></i>
          <ViberShareButton url={props.link}/>
        </a>
      </li>
      <li className="social-item">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/dwinbet">
          <i className="fab fa-google"></i>
          <GooglePlusShareButton url={props.link}/>
        </a>
      </li>
    </ul>
  );
}


export default SocialIcons;