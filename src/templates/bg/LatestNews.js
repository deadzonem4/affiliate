import React from "react";
import {Link} from "react-router-dom";



class LatestNews extends React.Component {

  render() {
    var length = this.props.data.length;

    return (
      <div className="news-sidebar">
        <div className="single-sidebar-article">
          <span>{this.props.data[length-1].date}</span>
          <h4>{this.props.data[length-1].title_bg}</h4>
        </div>
        <div className="single-sidebar-article">
          <span>{this.props.data[length-2].date}</span>
          <h4>{this.props.data[length-2].title_bg}</h4>
        </div>
        <div className="single-sidebar-article">
          <span>{this.props.data[length-3].date}</span>
          <h4>{this.props.data[length-3].title_bg}</h4>
        </div>
      </div>
    );
  }
}

export default LatestNews;



