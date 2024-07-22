import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";

const CompapreProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/svg/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src="images/feature/ber-osklen.png"
                    className="img-fluid"
                    alt="bermuda osklen"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="tilte">Bermuda Osklen</h5>
                  <h6 className="price mb-3 mt-3">R$ 200,00</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Marca:</h5>
                      <p>Osklen</p>
                    </div>
                    <div className="product-detail">
                      <h5>Tipo:</h5>
                      <p>Bermuda</p>
                    </div>
                    <div className="product-detail">
                      <h5>Disponiblidade:</h5>
                      <p>Disponível</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>P</p>
                        <p>M</p>
                        <p>G</p>
                        <p>GG</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/svg/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src="images/feature/ber-osklen.png"
                    className="img-fluid"
                    alt="bermuda osklen"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="tilte">Bermuda Osklen</h5>
                  <h6 className="price mb-3 mt-3">R$ 200,00</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Marca:</h5>
                      <p>Osklen</p>
                    </div>
                    <div className="product-detail">
                      <h5>Tipo:</h5>
                      <p>Bermuda</p>
                    </div>
                    <div className="product-detail">
                      <h5>Disponiblidade:</h5>
                      <p>Disponível</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>P</p>
                        <p>M</p>
                        <p>G</p>
                        <p>GG</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompapreProduct;
