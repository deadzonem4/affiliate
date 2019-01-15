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
            Winbet is a registered trademark of Win Bet Online Ltd. (UIC 203294705), subject to regulation by the Gambling Commission of the Republic of Bulgaria and licensed under the Gambling Act with licenses number: 000030-8149 dated 10.07.2017. for organizing games in a casino, license number: 000030-3509 dated 30.03.2017. for organizing betting on results of sports competitions and races with horses and dogs and license number 000030 - 11266 dated 04.10.2017 for the organization of betting on chance events and betting related to knowledge of facts issued by the Government of the Republic of Bulgaria.
          </p>
          <p>
            Office: address: Bulgaria: Sofia 1799, Mladost 2 str. Sveti Kipriyan, block 292
          </p>
          <p>
            © 2018 Win Bet Online Ltd. - All Rights Reserved!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;





