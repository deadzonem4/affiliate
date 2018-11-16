import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import AllNews from '../../templates/bg/AllNews.js'
import '../styles/main.css';

const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42b08020441f4682a7cfd75a8e51a1e5';

class NewsPageBg extends React.Component {

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
          api: api.articles,
          loading: false
        });
      })
      .catch(error => {
      });      
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="wait-page">
          <i className="fas fa-spinner"></i>
          <h4>Моля изчакайте</h4>
        </div>
      );
    }
	  return (
	  	<MainLayout bg={this.props.languageBg} en={this.props.languageEn}>
        <AllNews api={this.state.api}/>
      </MainLayout>
	  );
	}
}

export default NewsPageBg;