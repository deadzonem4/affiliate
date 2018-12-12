import React from "react";
import MainLayout from '../../layout/en/MainLayout.js';
import {Link} from "react-router-dom";

const url = 'https://dev.winbet-bg.com/api/';

class SingleNews extends React.Component {

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
    	  <Link  to="/news">Back</Link>
    		<h4>{this.state.api[0][this.props.match.params.index-1].title_en}</h4>
    		<p>{this.state.api[0][this.props.match.params.index-1].description_en}</p>
      </MainLayout>
    );
  }
}

export default SingleNews;
