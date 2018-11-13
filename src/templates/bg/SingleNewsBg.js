import React from "react";
import MainLayout from '../../layout/bg/MainLayout.js';
import {Link} from "react-router-dom";

class SingleNewsBg extends React.Component {

  render() {

    return (
    	<MainLayout bg={this.props.languageBg} en={this.props.languageEn}>
    	  <Link  to="/news">Назад</Link>
    		<h4>{this.props.match.params.index} статия</h4>
      </MainLayout>
    );
  }
}

export default SingleNewsBg;



