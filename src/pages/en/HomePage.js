import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import MainSlider from '../../components/common/MainSlider.js';


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
			</MainLayout>
    </div>
  );
}

export default HomePage;
