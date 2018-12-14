import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import AllNews from '../../templates/en/AllNews.js'
import '../styles/main.css';
import WaitPage from './WaitPage.js';

const url = 'https://dev.winbet-bg.com/api/';

class NewsPage extends React.Component {

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
        <WaitPage/>
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

export default NewsPage;