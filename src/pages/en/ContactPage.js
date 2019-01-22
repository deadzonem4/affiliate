import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import ContactForm from '../../components/common/ContactForm.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import '../styles/main.css';

const ContactPage = (props) => {
  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
        <Breadcrumbs levelOne="Home" levelTwo="Contact us" levelTwoLink="/contact"/>
				<ContactForm
          formId="contact-page-form"
          title ="Contact us"
          subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          button="Submit"
          name="Name"
          email="Email"
          subject="Subject"
          message="Message"
          succeed="Your message has been sent successfully!"
        />
			</MainLayout>
    </div>
  );
}

export default ContactPage;

