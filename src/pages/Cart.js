import React from "react";
import Meta from "../components/Meta";
import camiseta from "../images/produtos/t-shirt/cocacola/7.1.jpg";

import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <Container class1="cart-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Produtos</h4>
              <h4 className="cart-col-2">Preço</h4>
              <h4 className="cart-col-3">Quantidade</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={camiseta} className="img-fluid" alt="produto img" />
                </div>
                <div className="w-75">
                  <p>Exemplo</p>
                  <p>Size: GG</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">R$ 120,00</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    className="form-control"
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <MdDelete className="text-danger fs-5" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">R$ 120,00</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/products" className="button">
                Continuar comprando
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>Subtotal: R$ 120,00</h4>
                <p>Fretes calculados na finalização da compra</p>
                <Link to="/checkout" className="button">
                  Conferir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
