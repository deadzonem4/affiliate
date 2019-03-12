import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import ContactForm from '../../components/common/ContactForm.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import '../styles/main.css';
import {ReactTitle} from 'react-meta-tags';
import Language from '../../components/common/Language.js';

const ContactPageBg = (props) => {
  return (
  	<div>
      <MainLayout>
        <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/contact" urlEn="/en/contact"/>
        <ReactTitle title="Winbet - Контакти"/>
        <Breadcrumbs levelOne="Начало" levelTwo="Контакти" levelTwoLink="/bg/contact"/>
				<ContactForm
          formId="contact-page-form"
          title ="Свържете се с нас"
          subtitle = "Ако имате въпроси може да се свържете с нас като попълните и изпратите формата "
          button="Изпрати"
          name="Име"
          email="Имейл"
          subject="Заглавие"
          message="Съобщение"
          succeed="Вашето съобщение е изпратено успешно!"
        />
			</MainLayout>
    </div>
  );
}

export default ContactPageBg;


