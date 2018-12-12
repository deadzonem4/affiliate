import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import AllNews from '../../templates/bg/AllNews.js'
import '../styles/main.css';

const url = 'https://dev.winbet-bg.com/api/';

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
        <div className="wait-page">
          <i className="fas fa-spinner"></i>
          <h4>Моля изчакайте</h4>
        </div>
      );
    }
	  return (
	  	<MainLayout bg={this.props.languageBg} en={this.props.languageEn}>
        <div className="news-page">
          <div className="container">
            <AllNews api={this.state.api}/>
          </div>
        </div>
      </MainLayout>
	  );
	}
}

export default NewsPageBg;