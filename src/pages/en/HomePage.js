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
				title="Lorem ipsum dolor"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Aenean euismod bibendum laoreet."
				secOne="casino"
				secTwo="sport"
				secThree="casino live"
			/>
			<ServiceBox
				title="Slogan Title"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."

				box1Title="Box title 1"
				box1Text="Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Aenean euismod bibendum laoreet. Proin gravida 
					dolor sit amet lacus accumsan et viverra."

				box2Title="Box title 2"
				box2Text="Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Aenean euismod bibendum laoreet. Proin gravida 
					dolor sit amet lacus accumsan et viverra."

				box3Title="Box title 3"
				box3Text="Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Aenean euismod bibendum laoreet. Proin gravida 
					dolor sit amet lacus accumsan et viverra."
			/>
		  <ApiData dataLink="https://dev.winbet-bg.com/api/en/news-slider">
        <NewsSlider
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

