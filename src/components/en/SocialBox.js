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
		      	<SocialIcons col="col-12"/>
		        <SocialText 
			        title="Winbet"
			        text1="About us"
			        link1="https://affiliate.winbet-bg.com/#/en/about-us"
			        text2="News"
			        link2="https://affiliate.winbet-bg.com/#/en/news"
			        text3="Live site"
			        link3="https://winbet.bg"
		        />
		        <SocialText 
			        title="Partners information"
			        text1="Terms and conditions"
			        link1="https://affiliate.winbet-bg.com/#/en/terms-and-coditions"
			        text2="Commission"
			        link2="https://affiliate.winbet-bg.com/#/en/commission"
			        text3="FAQ"
			        link3="https://affiliate.winbet-bg.com/#/en/f-a-q"
			        text4="Betting"
			        link4="https://affiliate.winbet-bg.com/#/en/responsible-betting"
		        />
		        <SocialText 
			        title="Customer Service"
			        text1="Bonuses and promotions"
			        link1="https://winbet.bg/en/promotion/"
			        text2="Deposit and payments"
			        link2="https://winbet.bg/en/help/payments/deposit"
		        />
		        <SocialText 
			        title="Contacts"
			        text1="Contact form"
			        link1="https://affiliate.winbet-bg.com/#/en/contact"
		        />
	        </div>
	      </div>
      </div>
    </div>
  );
}


export default SocialBox;