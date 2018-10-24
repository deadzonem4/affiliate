import React from 'react';
import MainLayout from '../layout/MainLayout.js';
import MainLayoutBg from '../layout/MainLayoutBg.js';



class HomePage extends React.Component {

	constructor(props) {
    super(props);
    this.langChangeBg = this.langChangeBg.bind(this);
    this.langChangeEn = this.langChangeEn.bind(this);
    this.state = {language: "en"};
  }
  langChangeBg() {
    this.setState({
      language: "bg"
    });
  }
	langChangeEn() {
	  this.setState({
	    language: "en"
	  });
	}

  render() {

		return (
	  	<div>
	    {this.state.language === "en" ?
				<MainLayout languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)}>
					<h1>Home Page</h1>
				</MainLayout>
	    :
	      <MainLayoutBg languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)}>
					<h1>Начална страница</h1>
				</MainLayoutBg>
	    }
	    </div>
	  );
  };
    
}

export default HomePage;
