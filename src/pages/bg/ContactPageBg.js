import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import ContactForm from '../../components/common/ContactForm.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import '../styles/main.css';
import {ReactTitle} from 'react-meta-tags';

const ContactPageBg = (props) => {
  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
        <ReactTitle title="Winbet - Контакти"/>
        <Breadcrumbs levelOne="Начало" levelTwo="Контакти" levelTwoLink="/contact"/>
				<ContactForm
          formId="contact-page-form"
          title ="Свържете се с нас"
          subtitle = "Eлементарен примерен текст в печатарската индустрия"
          button="Изпрати"
          name="Име"
          email="Имейл"
          subject="Относно"
          message="Съобщение"
          succeed="Вашето съобщение е изпратено успешно!"
        />
			</MainLayout>
    </div>
  );
}

export default ContactPageBg;


