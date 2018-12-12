import React from "react";
import {Link} from "react-router-dom";

class AllNews extends React.Component {
  

  render() {
    const news = this.props.api[0].map((filters, index) =>
      <div key={index}>
        <Link  to={{pathname: `/article${index + 1}`}}>
          <ul className="bet-info">
            <li id="match">
              <span>{filters.title_bg}</span>
            </li>
          </ul>
        </Link>
      </div>
    );
    return (
      <div className="bet-content">
        {news}
      </div>
    );
  }
}

export default AllNews;