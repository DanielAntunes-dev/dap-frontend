import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Blog"} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  {" "}
                  <RiArrowGoBackFill className="fs-5" />
                  Voltar aos blogs
                </Link>
                <h3 className="title">História Levi's</h3>
                <img
                  src="/images/blog/levis.png"
                  className="img-fluid my-4"
                  alt="blog"
                />
                <p>
                  A Levi’s é uma das marcas mais importantes quanto o assunto é
                  calça jeans e não é à toa, já que foi responsável por criar
                  essa peça de roupa, no ano de 1873. Ficou curioso para saber
                  mais? Então você precisa continuar lendo esse artigo que o
                  Shopping Eldorado Store preparou!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
