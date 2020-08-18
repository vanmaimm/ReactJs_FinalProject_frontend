import React, { Component } from "react";
import "./css/News.css";
import { Link } from "react-router-dom";
class News extends Component {
  render() {
    return (
      <div className="News">

        <div>
          <Link to="/">Trang chủ</Link>
          <span> >> Thông tin</span>
        </div>
        
      </div>
    );
  }
}

export default News;
