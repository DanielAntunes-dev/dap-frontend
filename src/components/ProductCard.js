import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/svg/wish.svg";
import compare from "../images/svg/prodcompare.svg";
import view from "../images/svg/view.svg";
import addCart from "../images/svg/add-cart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname === "/products" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="images/feature/ber-osklen.png"
              alt=""
              className="img-fluid"
            />
            <img
              src="images/feature/ber-osklen-2.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Osklen</h6>
            <h5 className="product-title">Bermuda Sarja Osklen</h5>

            <ReactStars
              count={5}
              size={24}
              value={5}
              edit={false}
              activeColor="#ffd700"
            />

            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              O dinamismo das principais metrópoles do mundo e toda a
              exuberância da natureza nacional, assim a Osklen conquistou seu
              espaço no mercado da moda, aquele "Made in Brazil" com sinônimo de
              sofisticação cool. O conceito central da marca atualmente é a moda
              sustentável, se destacando no mercado por sua preocupação em
              trabalhar com matérias-primas como materiais reciclados e fibras
              naturais.
            </p>
            <p className="price">R$ 150,00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={compare} alt="compare products" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addCart} alt="add cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
