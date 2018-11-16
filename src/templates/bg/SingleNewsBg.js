import React from "react";
import MainLayout from '../../layout/bg/MainLayout.js';
import {Link} from "react-router-dom";

const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42b08020441f4682a7cfd75a8e51a1e5';

class SingleNewsBg extends React.Component {

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
  	console.log(this.state.api[0])
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
    	  <Link  to="/news">Назад</Link>
    		<h4>{this.state.api[this.props.match.params.index-1].title} бг</h4>
      </MainLayout>
    );
  }
}

export default SingleNewsBg;



