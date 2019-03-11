import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import {Link} from "react-router-dom";
import errorImage from "../../images/error.png"
import {ReactTitle} from 'react-meta-tags';
import Language from '../../components/common/Language.js';

const ErrorPageBg = (props) => {
  return (
  	<div>
  		<ReactTitle title="Winbet - Error Page"/>
      <MainLayout>
      	<Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/" urlEn="/en/"/>
				<div className="error-page">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 error-content">
								<h4>Страницата, която търсите е преместена, изтрита или не съществува.</h4>
								<p>Ето няколко полезни връзки:</p>
								<Link  to="/bg/">Начало</Link>
								<Link  to="/bg/news">Новини</Link>
								<Link  to="/bg/contact">Контакти</Link>
								<Link  to="/bg/f-a-q">Често задавани въпроси</Link>
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

export default ErrorPageBg;
