import React from "react";
import {Link} from "react-router-dom";
import '../styles/main.css';

class AllNews extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      ImgPerPage: 4
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
      window.scrollTo(0, 1100)
    }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {

    const news = this.props.api.map((filters, index) =>
      <div className="news-box-content" key={index}>
        <Link className="all-news-img" to={{pathname: `/article${index + 1}`}}>
 
            <img src={"https://dev.winbet-bg.com/uploads/images/news/" + filters.image_name} alt="winbet news"/>

        </Link>
        <div className="all-news-content">
          <div className="all-news-date">
            <span>{filters.date}</span>
          </div>
          <div className="all-news-title">
            <h4>{filters.title_bg}</h4>
          </div>
          <div className="all-news-text">
            <p>{filters.short_description_bg}</p>
          </div>
          <Link className="all-news-link"  to={{pathname: `/article${index + 1}`}}>
          {this.props.read}
          </Link>
        </div>
      </div>
    );
    const data = news.reverse();
    const {currentPage, ImgPerPage } = this.state;

    // Logic for displaying news
    const indexOfLastImg = currentPage * ImgPerPage;
    const indexOfFirstImg = indexOfLastImg - ImgPerPage;
    const currentImg = data.slice(indexOfFirstImg, indexOfLastImg);

    const renderImg = currentImg.map((news, index) => {
      return <div className="news-box" key={index}>{news}</div>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / ImgPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="all-news-page">
        <h2 className="dark-title">{this.props.title}</h2>
        <div className="title-red-line"></div>
        <div className="all-news">
          {renderImg}
        </div>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default AllNews;



