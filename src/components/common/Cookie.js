import React from "react";
import './styles/main.css';
import CookieConsent from "react-cookie-consent";

const Cookie = (props) => {  
  return (
		<CookieConsent
  		location="bottom"
      buttonText={props.button}
      cookieName="Affiliate cookie"
      style={{ background: "rgba(34, 34, 34, 0.92)", margin: "0"}}
      buttonStyle={{ color: "#fff", fontSize: "14px", fontWeight: "600", padding: "5px 35px",
				borderRadius: "30px", margin: "8px 15px", background: "#cc2027"}}
      expires={30}
      contentClasses="cookie-text"
      >
      {props.text}
  	</CookieConsent>
  );
}


export default Cookie;
