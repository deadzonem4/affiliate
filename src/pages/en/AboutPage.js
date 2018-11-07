import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import '../styles/main.css';


const AboutPage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<div className="container">
		      <div className="about-content">
						<h2 className="dark-title">About us</h2>
						<div className="title-red-line"></div>
						<p>
							We strive to offer you good conditions, dedicated team and advertising texts and materials to help mutual satisfaction of our partners and customers. Our mission is to offer a wide range of products: sports, live casino, casino games and virtual sports that you as our partners can present to your customers, online or offline.
						</p>
						<p>
							Why join the winbet.bg Affiliate program?
						</p>
						<ul>
							<li>
								you become part of our reputed brand. As a partner you will have access to a database and promotional texts and materials that will help generate good reputation and attract more customers.
							</li>
							<li>
								you will be able to receive a 30% commission for each forwarded customer through our advertising materials.
							</li>
							<li>
								payments will be transferred to you in a convenient way: an ePay account or a bank transfer.
							</li>
							<li>
								allowing you to access a statistical system that will track your customer's activities and provide you with reliable, reliable and accurate information.
							</li>
						</ul>
						<p>
							Is the winbet.bg Affiliate Program free?
						</p>
						<ul>
							<li>
								yes, it is completely free and you do not owe any fees and charges to join.
							</li>
						</ul>
						<p>How do I join the winbet.bg Affiliate program?</p>
						<ul>
							<li>click on the registration button and start filling in the Registration form. Filling will take you a few minutes, and the final phase is to read and confirm that you agree to our Terms and Conditions. Then click the Confirmation button on the Registration form. Each registration is considered personally within 5 business days.</li>
						</ul>
					</div>
				</div>
			</MainLayout>
    </div>
  );
}

export default AboutPage;

