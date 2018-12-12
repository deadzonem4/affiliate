import React from "react";
import MainLayout from '../../layout/bg/MainLayout.js';
import SingleNewsSlider from '../../components/common/SingleNewsSlider.js';
import {Link} from "react-router-dom";

const url = 'https://dev.winbet-bg.com/api/';

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
    	  <Link  to="/news">Назад</Link>
    		<h4>{this.state.api[0][this.props.match.params.index-1].title_bg}</h4>
        <p>{this.state.api[0][this.props.match.params.index-1].description_bg}</p>
        <img src={"http://dev.winbet-bg.com/uploads/images/newsImages/" + this.state.api[0][this.props.match.params.index-1].photos[0].link} />
        <SingleNewsSlider info={this.state.api[0][this.props.match.params.index-1].photos}/>
      </MainLayout>
    );
  }
}

export default SingleNewsBg;



