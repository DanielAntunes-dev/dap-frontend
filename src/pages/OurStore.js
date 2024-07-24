import React, { useState } from "react";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Minha Loja"} />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By category</h3>
                <div>
                  <ul className="ps-1">
                    <li>T-shirts</li>
                    <li>Regatas</li>
                    <li>Bermudas</li>
                    <li>Calças</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filtrar por</h3>
                <div>
                  <h5 className="sub-title">Disponibilidade</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Em estoque (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        indisponível (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Preço</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="De"
                      />
                      <label htmlFor="floatingInput">De</label>
                    </div>
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput1"
                        placeholder="Até"
                      />
                      <label htmlFor="floatingInput1">Até</label>
                    </div>
                  </div>
                  {/* Color */}
                  <h5 className="sub-title">Cores</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-title">Tamanho</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-1"
                      />
                      <label className="form-check-label" htmlFor="size-1">
                        P (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-2"
                      />
                      <label className="form-check-label" htmlFor="size-2">
                        M (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-3"
                      />
                      <label className="form-check-label" htmlFor="size-3">
                        G (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-4"
                      />
                      <label className="form-check-label" htmlFor="size-4">
                        GG (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-01"
                      />
                      <label className="form-check-label" htmlFor="size-01">
                        38 (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-02"
                      />
                      <label className="form-check-label" htmlFor="size-02">
                        40 (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-03"
                      />
                      <label className="form-check-label" htmlFor="size-03">
                        42 (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-04"
                      />
                      <label className="form-check-label" htmlFor="size-04">
                        44 (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-05"
                      />
                      <label className="form-check-label" htmlFor="size-05">
                        46 (5)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-06"
                      />
                      <label className="form-check-label" htmlFor="size-06">
                        48 (5)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Marcas</h3>
                <div>
                  <div className="products-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Reserva
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Osklen
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Cavelera
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Colcci
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Produtos aleatórios</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/min/reserva.png"
                        alt="camiseta reserva"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Camiseta Reserva</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>R$120,00</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/min/osklen.png"
                        alt="camiseta reserva"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Regata Osklen</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>R$100,00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best selling</option>
                      <option value="title-ascending">A-Z</option>
                      <option value="title-descending">Z-A</option>
                      <option value="price-ascending">Menor pro Maior</option>
                      <option value="price-descending">Maior pro Menor</option>
                      <option value="created-ascending">Antigo pro Novo</option>
                      <option value="created-descending">
                        Novo pro Antigo
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 produtos</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/svg/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/svg/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/svg/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/svg/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
