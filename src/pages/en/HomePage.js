import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import MainSlider from '../../components/en/MainSlider.js';


const HomePage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<MainSlider registerbutton="Register" logbutton="Log-in"/>
			</MainLayout>
    </div>
  );
}

export default HomePage;
