import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import {Link} from "react-router-dom";
import errorImage from "../../images/error.png"
import {ReactTitle} from 'react-meta-tags';
import Language from '../../components/common/Language.js';

const ErrorPage = (props) => {
  return (
  	<div>
  		<ReactTitle title="Winbet - Error Page"/>
      <MainLayout>
      	<Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/contact" urlEn="/en/contact"/>
	      <div className="error-page">
	      	<div className="container">
	      	<div className="row">
		      	<div className="col-sm-6 error-content">
							<h4>The page you were looking for have been moved, deleted or does not exist.</h4>
							<p>Here are some helpful links instead:</p>
							<Link  to="/en/">Home</Link>
							<Link  to="/en/news">News</Link>
							<Link  to="/en/contact">Contacts</Link>
							<Link  to="/en/f-a-q">FAQ</Link>
						</div>
						<div className="col-sm-6 error-img-box">
		      		<img src={errorImage} alt="winbet error"/>
		      	</div>
					</div>
					</div>
				</div>
			</MainLayout>
    </div>
  );
}

export default ErrorPage;
