import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import MainSlider from '../../components/common/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';
import ServiceBox from '../../components/common/ServiceBox.js';

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
			</MainLayout>
    </div>
  );
}

export default HomePage;
