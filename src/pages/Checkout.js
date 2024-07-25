import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import camiseta from "../images/produtos/t-shirt/cocacola/7.1.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="Website-name">DAP Multimarcas</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark cart-average" to="/cart">
                      Carrinho <IoIosArrowForward className="fs-5" />
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item cart-average active"
                    aria-current="page"
                  >
                    Informações <IoIosArrowForward className="fs-5" />
                  </li>

                  <li className="breadcrumb-item cart-average active">
                    Frete <IoIosArrowForward className="fs-5" />
                  </li>

                  <li
                    className="breadcrumb-item active cart-average"
                    aria-current="page"
                  >
                    Pagamento
                  </li>
                </ol>
              </nav>
              <h4 className="title cart-light">Informações de Contato</h4>
              <p className="user-details cart-light">
                Daniel Antunes (dap.junioruvv@gmail.com)
              </p>
              <h4 className="mb-3">Endereço de entrega</h4>
              <form className="d-flex gap-15 flex-wrap justify-content-between">
                <div className="w-100">
                  <select className="form-control form-select">
                    <option selected disabled>
                      Selecione o Pais
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Sobrenome"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Endereço"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Complemento(opcional)"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select className="form-control form-select">
                    <option selected disabled>
                      Selecione o Estado
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="CEP"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <IoIosArrowBack className="fs-4" /> Voltar para o carrinho
                    </Link>
                    <Link className="button bg-danger text-white">
                      Continuar
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{
                        top: "-18px",
                        right: "4px",
                        width: "6px",
                        height: "6px",
                      }}
                      className="cart-qtd badge bg-secondary text-white rounded-circle p-3 position-absolute"
                    >
                      1
                    </span>
                    <img
                      src={camiseta}
                      className="img-cart img-fluid"
                      alt="img produto"
                    />
                  </div>
                  <div>
                    <h5 className="cart-average">Exemplo</h5>
                    <p className="cart-light">s / exemplo</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="cart-light">R120,00</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="cart-light">Subtotal</p>
                <p className="cart-average">R$ 120,00</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 cart-light">Frete</p>
                <p className="mb-0 cart-average">R$ 12,00</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="cart-light">Total</h4>
              <h5 className="cart-average">R$ 132,00</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
