import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src="images/produtos/bermuda/osklen/special-bermuda-osklen-1.jpg"
              alt="bermuda osklen"
              className="img-fluid "
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Osklen</h5>
            <h6 className="title">Bermuda Sarja Osklen</h6>
            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">R$140,00</span> &nbsp;
              <strike>R$250,00</strike>
            </p>
            <div className="discont-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>700</b> dias
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">12</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Produtos: 5 </p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Add ao carrinho</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
