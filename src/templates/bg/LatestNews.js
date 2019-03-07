import React from "react";
import {Link} from "react-router-dom";
import '../styles/main.css';

class LatestNews extends React.Component {
  constructor(props) {
    super(props);
    this.latestClick = this.latestClick.bind(this)
  }
  latestClick(event) {
    localStorage.setItem('curNews', event.target.getAttribute('value'));
     console.log(this.staste.newsId);
  }
  render() {
    return (
      <div className="single-article-sidebar">
        <Link onClick={this.latestClick} to={{pathname: this.props.data[0].title_bg}}>
          <div className="single-sidebar-article">
            <span>{this.props.data[0].date}</span>
            <h4 value="0">{this.props.data[0].title_bg}</h4>
          </div>
        </Link>
        <Link onClick={this.latestClick} to={{pathname: this.props.data[1].title_bg}}>
          <div className="single-sidebar-article">
            <span>{this.props.data[1].date}</span>
            <h4 value="1">{this.props.data[1].title_bg}</h4>
          </div>
        </Link>
        <Link onClick={this.latestClick} to={{pathname: this.props.data[2].title_bg}}>
          <div className="single-sidebar-article">
            <span>{this.props.data[2].date}</span>
            <h4 value="2">{this.props.data[2].title_bg}</h4>
          </div>
        </Link>
      </div>
    );
  }
}

export default LatestNews;



