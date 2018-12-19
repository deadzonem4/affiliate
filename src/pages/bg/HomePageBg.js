import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import MainSlider from '../../components/common/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';
import ServiceBox from '../../components/common/ServiceBox.js';
import NewsSlider from '../../components/common/NewsSlider.js';
import ContactForm from '../../components/common/ContactForm.js';
import WaitPageBg from './WaitPageBg.js';
import '../styles/main.css';


const url = 'https://dev.winbet-bg.com/api/';

class HomePageBg extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
      api: ''
    };
  }
  componentWillMount(){
    fetch(url)
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
      .then(api => {
        this.setState({ 
          api: api,
          loading: false
        });

      })
      .catch(error => {

      });      
  }

  render() {
    if (this.state.loading) {
      return (
        <WaitPageBg/>
      );
    }
return (
  	<div>
      <MainLayout bg={this.props.languageBg} en={this.props.languageEn}>
				<MainSlider 
					registerbutton="Регистрация" 
					logbutton="Вход" 
					text="Lorem Ipsum е елементарен примерен текст, използван в печатарската и 
	            типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, 
	            когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с 
	            тях книга с примерни шрифтове." 
					title="победата е на върха на пръстите Ви!"
				/>
				<CasinoBox 
					title="Примерен текст"
					text="Lorem Ipsum е елементарен примерен текст, 
						използван в печатарската и типографската индустрия."
					secOne="казино"
					secTwo="спорт"
					secThree="казино на живо"
				/>
				<ServiceBox
					title="Слоган заглавие"
					description="Eлементарен примерен текст в печатарската индустрия"

					box1Title="Заглавие 1"
					box1Text="Lorem Ipsum е елементарен примерен текст, 
						използван в печатарската и типографската индустрия, стандарт от около 1500 година, когато неизвестен печатар взема"

					box2Title="Заглавие 2"
					box2Text="Lorem Ipsum е елементарен примерен текст, 
						използван в печатарската и типографската индустрия, стандарт от около 1500 година, когато неизвестен печатар взема"

					box3Title="Заглавие 3"
					box3Text="Lorem Ipsum е елементарен примерен текст, 
						използван в печатарската и типографската индустрия, стандарт от около 1500 година, когато неизвестен печатар взема"
				/>
				<NewsSlider
					data = {this.state.api[1]}
					title="Последни новини"
					button="Всички новини"
				/>
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
}

export default HomePageBg;
