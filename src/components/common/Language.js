import React from "react";
import './styles/main.css';

const Language = (props) => {
    
  return (
    <div className="lang-bar">
    	<span onClick={props.bg}>BG</span>
      <span onClick={props.en}>EN</span>
    </div>
  );
}


export default Language;
