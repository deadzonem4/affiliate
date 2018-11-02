import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import MainSlider from '../../components/common/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';
import ServiceBox from '../../components/common/ServiceBox.js';
import NewsSlider from '../../components/common/NewsSlider.js';
import ContactForm from '../../components/common/ContactForm.js';
import SocialBox from '../../components/en/SocialBox.js';

const HomePage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<MainSlider 
					registerbutton="Registration" 
					logbutton="Log in" 
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo." 
					title="victory is at the edge of your fingers!"
				/>
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
				<NewsSlider
					title="Latest news"
					button="All news"
					date1="29/10/2018"
					text1="Lorem ipsum dolor sit amet, consectetur adipiscing 
						elit. Aenean euismod bibendum laoreet. Proin gravida 
						dolor sit amet lacus accumsan et viverra. Aenean euismod bibendum laoreet. Lorem ipsum dolor
						sit amet."

					date2="21/10/2018"
					text2="Aenean euismod bibendum laoreet. Proin gravida 
						dolor sit amet lacus accumsan et viverra.Lorem ipsum dolor
						sit amet. Aenean euismod bibendum laoreet. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit."
				/>
				<ContactForm
          title ="Contact us"
          subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          button="Submit"
          name="Name"
          email="Email"
          subject="Subject"
          message="Message"
        />
        <SocialBox/>
			</MainLayout>
    </div>
  );
}

export default HomePage;
