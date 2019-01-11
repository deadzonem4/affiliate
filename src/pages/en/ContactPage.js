import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import ContactForm from '../../components/common/ContactForm.js';


const ContactPage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<ContactForm
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

