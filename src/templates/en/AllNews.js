import React from "react";
import {Link} from "react-router-dom";

class AllNews extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    const news = this.props.api.map((filters, index) =>
      <div className="news-box-content" key={index}>
        <Link  to={{pathname: `/article${index + 1}`}}>
          <span>{filters.title_en}</span>
        </Link>
      </div>
    );
    return (
      <div className="news-box">
        {news}
      </div>
    );
  }
}

export default AllNews;