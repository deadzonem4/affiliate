import React from "react";
import '../styles/main.css';
import SocialText from '../common/SocialText.js'
import SocialIcons from '../common/SocialIcons.js'

const SocialBox = (props) => {

  return (
    <div className="social-box">
	    <div className="container">
	      <div className="social-box-content">
	      	<div className="row">
		      	<SocialIcons/>
		        <SocialText 
			        title="Заглавие на секция 1"
			        text1="примерен текст 1"
			        text2="примерен текст 2"
			        text3="примерен текст 3"
			        text4="примерен текст 4"
			        text5="примерен текст 5"
		        />
		        <SocialText 
			        title="Заглавие на секция 2"
			        text1="примерен текст 1"
			        text2="примерен текст 2"
			        text3="примерен текст 3"
			        text4="примерен текст 4"
		        />
		        <SocialText 
			        title="Заглавие на секция 3"
			        text1="примерен текст 1"
			        text2="примерен текст 2"
			        text3="примерен текст 3"
			        text4="примерен текст 4"
			        text5="примерен текст 5"
		        />
		        <SocialText 
			        title="Заглавие на секция 4"
			        text1="примерен текст 1"
			        text2="примерен текст 2"
			        text3="примерен текст 3"
		        />
	        </div>
	      </div>
      </div>
    </div>
  );
}


export default SocialBox;