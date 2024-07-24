import React from "react";
import Meta from "../components/Meta";
import Blogcard from "../components/Blogcard";

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By category</h3>
                <div>
                  <ul className="ps-1">
                    <li>T-shirts</li>
                    <li>Regatas</li>
                    <li>Bermudas</li>
                    <li>Calças</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-3">
                  <Blogcard />
                </div>
                <div className="col-6 mb-3">
                  <Blogcard />
                </div>
                <div className="col-6 mb-3">
                  <Blogcard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
