import React from "react";
import './styles/main.css';

const Language = (props) => {
    
  return (
    <div className="lang-bar">
    	<span onClick={props.bg}>bg</span>
      <span onClick={props.en}>en</span>
    </div>
  );
}


export default Language;
