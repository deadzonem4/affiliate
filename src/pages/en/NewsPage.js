import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import AllNews from '../../templates/en/AllNews.js'

const url = 'https://api.the-odds-api.com/v3/odds/?sport=UPCOMING&region=uk&apiKey=ad861170ddf643485f860929c4cfab22';

class NewsPageBg extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
      homeTeam : '',
      awayTeam : '',
      mydata: '',
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
          api: api.data,
          loading: false
        });
      })
      .catch(error => {
      });
  }

  render() {
    if (this.state.loading) {
      return null;
    }
	  return (
	  	<MainLayout bg={this.props.languageBg} en={this.props.languageEn}>
      	<AllNews api={this.state.api}/>
      </MainLayout>
	  );
	}
}

export default NewsPageBg;