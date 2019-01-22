import React from "react";
import {Link} from "react-router-dom";
import '../styles/main.css';

const LatestNews = (props) => {
  return (
    <div className="single-article-sidebar">
      <Link  to={{pathname: `/article${1}`}}>
        <div className="single-sidebar-article">
          <span>{props.data[0].date}</span>
          <h4>{props.data[0].title_en}</h4>
        </div>
      </Link>
      <Link  to={{pathname: `/article${2}`}}>
        <div className="single-sidebar-article">
          <span>{props.data[1].date}</span>
          <h4>{props.data[1].title_en}</h4>
        </div>
      </Link>
      <Link  to={{pathname: `/article${3}`}}>
        <div className="single-sidebar-article">
          <span>{props.data[2].date}</span>
          <h4>{props.data[2].title_en}</h4>
        </div>
      </Link>
    </div>
  );
}

export default LatestNews
