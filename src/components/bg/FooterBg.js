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
// partners
import cska from '../../images/partners/cska.png';
import etyr from '../../images/partners/etyr.png';
import dunav from '../../images/partners/dunav.png';
import botevVr from '../../images/partners/botevVr.png';
import chernomorec from '../../images/partners/chernomorec.png';
import botevBorba from '../../images/partners/botevBorba.png';
import pobeda from '../../images/partners/pobeda.png';
import bfb from '../../images/partners/bfb.png';
import privacy from '../../images/partners/privacy.png';


const FooterBg = (props) => {
    
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
        <h4 className="list-title">Официални партньори:</h4>
        <ul className="partner-list">
          <li><img src={cska} alt="cska"/></li>
          <li><img src={etyr} alt="etyr"/></li>
          <li><img src={dunav} alt="dunav"/></li>
          <li><img src={botevVr} alt="botevVr"/></li>
          <li><img src={chernomorec} alt="chernomorec"/></li>
          <li><img src={botevBorba} alt="botevBorba"/></li>
          <li><img src={pobeda} alt="pobeda"/></li>
          <li><img src={bfb} alt="bfb"/></li>
          <li><img src={privacy} alt="privacy"/></li>
        </ul>
        <div className="copy-right">
          <p>
          	Winbet  е регистрирана търговска марка на Уин Бет Онлайн ЕООД (ЕИК 203294705), подлежи на регулация от Комисията по Хазарта на Република България и е лицензирана съгласно Закона за хазарта с лицензи номер: 000030-8149 от дата 10.07.2017г. за организиране на игри в игрално казино, лиценз номер: 000030-3509 от дата 30.03.2017г. за организиране на залагания върху резултати от спортни състезания и надбягвания с коне и кучета и лиценз номер 000030 – 11266 от дата 04.10.2017 за организиране на залагания върху случайни събития и залагания, свързани с познаване на факти, издадени от Правителството на Република България.
          </p>
          <p>
            Офис: адрес: България: гр. София 1799, кв. Младост 2 ул. Свети Киприян, блок 292
          </p>
          <p>
            ©2018 Уин Бет Онлайн ЕООД - Всички права запазени!
          </p>
        </div>
      </div>
    </footer>
  );
}


export default FooterBg;
