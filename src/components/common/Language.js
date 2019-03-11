import React from "react";
import './styles/main.css';
import {Link} from "react-router-dom";

const Language = (props) => {
    
  return (
    <div className="lang-bar">
			<Link  to={props.urlBg}>
    		<span onClick={props.bg}>BG</span>
			</Link>
			<Link  to={props.urlEn}>
      	<span onClick={props.en}>EN</span>
			</Link>
    </div>
  );
}


export default Language;
