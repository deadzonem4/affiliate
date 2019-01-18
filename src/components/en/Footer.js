import React from "react";
import '../styles/main.css';
// payments
import visa from '../../images/payments/visa.png';
import visaelectron from '../../images/payments/visaelectron.png';
import mastercard from '../../images/payments/mastercard.png';
import house from '../../images/payments/house.png';
import easypay from '../../images/payments/easypay.png';
import epay from '../../images/payments/epay.png';
import cashterminal from '../../images/payments/cashterminal.png';


const Footer = (props) => {

const images = props.api.map((data, index) =>
  <li key={index}>
    <img src={"https://dev.winbet-bg.com/uploads/images/partners_logo/" + data.img_name} alt='winbet partner'/>
  </li>
);

  return (
    <footer id="footer">
      <div className="container">
        <ul className="payment-list">
          <li><img src={visa} alt="visa"/></li>
          <li><img src={visaelectron} alt="visaelectron"/></li>
          <li><img src={mastercard} alt="mastercard"/></li>
          <li><img src={house} alt="house"/></li>
          <li><img src={easypay} alt="easypay"/></li>
          <li><img src={epay} alt="epay"/></li>
          <li><img src={cashterminal} alt="cashterminal"/></li>
        </ul>
        <h4 className="list-title">Official Partners:</h4>
        <ul className="partner-list">
          {images}
        </ul>
        <div className="copy-right">
          <p>
            Winbet online is a registered trademark of “Win Bet Online” EOOD (UIC 203294705), the activity of which is subject to regulation by the State Commission on Gambling (SCG) of the Republic of Bulgaria, and is licensed according to the Gambling Act with Certificate number: 000030-14103 from 13.11.2018, reflecting the current status of a license for organizing games in a gaming casino, issued by virtue of Decision No. 000030-6257 from 29.06.2015; Certificate number: 000030-823 from 24.01.2018, reflecting the current status of a license for organizing bets on results from sporting competitions and horse and dog racing, issued by virtue of Decision No. 00030-8099 from 22.07.2016; and Certificate number: 000030-822 from 24.01.2018, reflecting the current status of a license for organizing bets on random events and bets related to knowledge of facts, issued by virtue of Decision No. 000030-11140 from 29.09.2017.
          </p>
          <p>
            Address: Mladost 2 liv.d., Sveti Kipriyan St., block 292, Sofia 1799, Bulgaria
          </p>
          <p>
            ©2019 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;





