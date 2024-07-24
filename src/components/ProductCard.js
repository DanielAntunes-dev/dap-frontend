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
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
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
              <Link>
                <img src={compare} alt="compare products" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addCart} alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
