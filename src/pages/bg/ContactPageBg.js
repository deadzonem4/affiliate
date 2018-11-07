import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';
import ContactForm from '../../components/common/ContactForm.js';


const ContactPageBg = (props) => {

  return (
  	<div>
      <MainLayoutBg bg={props.languageBg} en={props.languageEn}>
				<ContactForm
          title ="Свържете се с нас"
          subtitle = "Eлементарен примерен текст в печатарската индустрия"
          button="Изпрати"
          name="Име"
          email="Имейл"
          subject="Относно"
          message="Съобщение"
        />
			</MainLayoutBg>
    </div>
  );
}

export default ContactPageBg;


