import React from "react";
import MainLayout from '../../layout/en/MainLayout.js';
import {Link} from "react-router-dom";

class SingleNews extends React.Component {  

  render() {

    return (
    	<MainLayout bg={this.props.languageBg} en={this.props.languageEn}>
    		<Link  to="/news">Back</Link>
    		<h4>{this.props.match.params.index} article</h4>
      </MainLayout>
    );
  }
}

export default SingleNews;




