import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Favoritos"} />
      <Container class2="wishlist-wrapper home-wrapper-2 py-5">
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
      </Container>
    </>
  );
};

export default Wishlist;
