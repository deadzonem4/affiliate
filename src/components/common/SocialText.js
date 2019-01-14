import React from "react";
import './styles/main.css';

const SocialText = (props) => {

  return (
    <div className="social-text col-sm-6 col-lg-3">
    	<h4>{props.title}</h4>
    	<ul>
    		<li>{props.text1}</li>
    		<li>{props.text2}</li>
    		<li>{props.text3}</li>
    		<li>{props.text4}</li>
    		<li>{props.text5}</li>
    	</ul>
    </div>
  );
}


export default SocialText;