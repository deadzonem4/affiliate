import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import {Link} from "react-router-dom";
import errorImage from "../../images/error.png"
import {ReactTitle} from 'react-meta-tags';

const ErrorPageBg = (props) => {
  return (
  	<div>
  		<ReactTitle title="Winbet - Error Page"/>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<div className="error-page">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<h4>Страницата, която търсите е преместена, изтрита или не съществува.</h4>
								<p>Ето няколко полезни връзки:</p>
								<Link  to="/">Начало</Link>
								<Link  to="/news">Новини</Link>
								<Link  to="/contact">Контакти</Link>
								<Link  to="/f-a-q">Често задавани въпроси</Link>
							</div>
							<div className="col-6">
								<img src={errorImage} alt="winbet error"/>
							</div>
						</div>
					</div>
				</div>
			</MainLayout>
    </div>
  );
}

export default ErrorPageBg;
