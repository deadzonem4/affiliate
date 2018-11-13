import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import ContactForm from '../../components/common/ContactForm.js';


const ContactPageBg = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<ContactForm
          title ="Свържете се с нас"
          subtitle = "Eлементарен примерен текст в печатарската индустрия"
          button="Изпрати"
          name="Име"
          email="Имейл"
          subject="Относно"
          message="Съобщение"
        />
			</MainLayout>
    </div>
  );
}

export default ContactPageBg;


