import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import MainSlider from '../../components/en/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';
import ServiceBox from '../../components/common/ServiceBox.js';
import NewsSlider from '../../components/common/NewsSlider.js';
import ContactForm from '../../components/common/ContactForm.js';
import ApiData from '../../templates/ApiData.js';
import StorageSliderEn from '../../templates/StorageSliderEn.js';
import '../styles/main.css';
import {ReactTitle} from 'react-meta-tags';
import Language from '../../components/common/Language.js';

const HomePage = (props) => {

  return (
    <MainLayout>
    	<Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/" urlEn="/en/"/>
    	<ReactTitle title={"Winbet - Home"}/>
      <StorageSliderEn dataLink="https://dev.winbet-bg.com/api/en/sliders">
         <MainSlider title="title_en" description="description_en" button1="button_text1_en" button2="button_text2_en"/>
      </StorageSliderEn>
			<CasinoBox 
				title="Our products"
				text="Become part of the Winbet family and take advantage of the chance of extra profit!"
				secOne="casino"
				secTwo="sport"
				secThree="casino live"
			/>
			<ServiceBox
				title="Join our affiliate program!"
				description="A variety of products and many opportunities"

				box1Title="Registration"
				box1Text="Winbet's Affiliate Program offers you the highest quality products: slot games, live casino, sports stacks. Multiple payment methods, support and innovative software."

				box2Title="Advertisement"
				box2Text="Winbet provides a wide variety of promotional materials to its partners. Reach new customers and grow together with us."

				box3Title="Earning"
				box3Text="Provide your income through advertising. You receive a percentage of the funds played by the customers who have signed up through your ad. "
			/>
		  <ApiData dataLink="https://dev.winbet-bg.com/api/en/news-slider">
        <NewsSlider
        	link="/en/news"
					title="Latest news"
					button="All news"
					date="date"
					description="short_description_en"
				/>
      </ApiData>
			<ContactForm
        title ="Contact us"
        subtitle = "If you have any questions, please contact us by filling in and submitting the form"
        button="Submit"
        name="Name"
        email="Email"
        subject="Title"
        message="Message"
        succeed="Your message has been sent successfully!"
      />
		</MainLayout>
  );
}

export default HomePage;

