import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/svg/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/feature/ber-osklen.png"
                    className="img-fluid bg-white"
                    alt="bermuda osklen"
                  />
                </div>
                <div className="px-3 py-3">
                  <h5 className="title">Bermuda Osklen</h5>
                  <h6 className="price">R$ 200,00</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/svg/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/feature/ber-osklen.png"
                    className="img-fluid bg-white"
                    alt="bermuda osklen"
                  />
                </div>
                <div className="px-3 py-3">
                  <h5 className="title">Bermuda Osklen</h5>
                  <h6 className="price">R$ 200,00</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/svg/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/feature/ber-osklen.png"
                    className="img-fluid bg-white"
                    alt="bermuda osklen"
                  />
                </div>
                <div className="px-3 py-3">
                  <h5 className="title">Bermuda Osklen</h5>
                  <h6 className="price">R$ 200,00</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/svg/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/feature/ber-osklen.png"
                    className="img-fluid bg-white"
                    alt="bermuda osklen"
                  />
                </div>
                <div className="px-3 py-3">
                  <h5 className="title">Bermuda Osklen</h5>
                  <h6 className="price">R$ 200,00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
