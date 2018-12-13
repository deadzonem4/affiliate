import React from "react";
import {Link} from "react-router-dom";
import '../styles/main.css';

class LatestNews extends React.Component {

  render() {
    var length = this.props.data.length;

    return (
      <div className="single-article-sidebar">
        <Link  to={{pathname: `/article${length}`}}>
          <div className="single-sidebar-article">
            <span>{this.props.data[length-1].date}</span>
            <h4>{this.props.data[length-1].subtitle_bg}</h4>
          </div>
        </Link>
        <Link  to={{pathname: `/article${length-1}`}}>
          <div className="single-sidebar-article">
            <span>{this.props.data[length-2].date}</span>
            <h4>{this.props.data[length-2].subtitle_bg}</h4>
          </div>
        </Link>
        <Link  to={{pathname: `/article${length-2}`}}>
          <div className="single-sidebar-article">
            <span>{this.props.data[length-3].date}</span>
            <h4>{this.props.data[length-3].subtitle_bg}</h4>
          </div>
        </Link>
      </div>
    );
  }
}

export default LatestNews;



