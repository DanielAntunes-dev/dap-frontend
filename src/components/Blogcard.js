import React from "react";
import { Link } from "react-router-dom";

const Blogcard = () => {
  return (
    // <div className="col-3">
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog/levis.png" className="img-fluid w-100" alt="" />
      </div>
      <div className="blog-content">
        <p className="date">17 Julho, 2024</p>
        <h5 className="title">Historia da Levis</h5>
        <p className="desc">
          A invenção dos jeans azuis foi apenas o início do modo...
        </p>
        <Link to="/blog/:id" className="button">
          Leia mais
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Blogcard;
