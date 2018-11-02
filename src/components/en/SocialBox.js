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
			        title="This is title section 1"
			        text1="some text here 1"
			        text2="some text here 2"
			        text3="some text here 3"
			        text4="some text here 4"
			        text5="some text here 5"
		        />
		        <SocialText 
			        title="This is title section 2"
			        text1="some text here 1"
			        text2="some text here 2"
			        text3="some text here 3"
			        text4="some text here 4"
		        />
		        <SocialText 
			        title="This is title section 3"
			        text1="some text here 1"
			        text2="some text here 2"
			        text3="some text here 3"
			        text4="some text here 4"
			        text5="some text here 5"
		        />
		        <SocialText 
			        title="This is title section 4"
			        text1="some text here 1"
			        text2="some text here 2"
			        text3="some text here 3"
		        />
	        </div>
	      </div>
      </div>
    </div>
  );
}


export default SocialBox;