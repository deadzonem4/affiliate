import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import {Link} from "react-router-dom";
import errorImage from "../../images/error.png"
import {ReactTitle} from 'react-meta-tags';

const ErrorPage = (props) => {
  return (
  	<div>
  		<ReactTitle title="Winbet - Error Page"/>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
	      <div className="error-page">
	      	<div className="container">
	      	<div className="row">
		      	<div className="col-sm-6 error-content">
							<h4>The page you were looking for have been moved, deleted or does not exist.</h4>
							<p>Here are some helpful links instead:</p>
							<Link  to="/">Home</Link>
							<Link  to="/news">News</Link>
							<Link  to="/contact">Contacts</Link>
							<Link  to="/f-a-q">FAQ</Link>
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
