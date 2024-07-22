import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Blogcard from "../components/Blogcard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-banner position-relative">
                <img
                  src="images/banner/banner-2.png"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>OFERTA ESPECIAL</h4>
                  <h5>Camisa Cavarela</h5>
                  <p>De 199,00 por 99,00</p>
                  <Link className="button">COMPRE AGORA</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-wrap gap-10 justify-content-around align-items-center">
                <div className="small-banner position-relative mb-2">
                  <img
                    src="images/banner/bg-1.png"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>OFERTA ESPECIAL</h4>
                    <h5>Bermuda Tommy Hilfiger</h5>
                    <p>De 199,00 por 99,00</p>
                  </div>
                </div>
                <div className="small-banner position-relative mb-2">
                  <img
                    src="images/banner/bg-2.png"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>OFERTA ESPECIAL</h4>
                    <h5>Calça jeans Lacoste</h5>
                    <p>De 499,00 por 299,00</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/banner/bg-3.png"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>OFERTA ESPECIAL</h4>
                    <h5>Regata Osklen</h5>
                    <p>De 149,00 por 79,00</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/banner/bg-4.png"
                    className="img-fluid rounded-3"
                    alt="emall banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>OFERTA ESPECIAL</h4>
                    <h5>Calça moleton High</h5>
                    <p>De 399,00 por 199,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/icons/service-01.png" alt="services" />{" "}
                  <div>
                    <h6>Frete grátis</h6>
                    <p className="mb-0">Para pedidos acima de R$1000</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/icons/service-03.png" alt="services" />{" "}
                  <div>
                    <h6>Suporte 24/7</h6>
                    <p className="mb-0">Compre com expectativa</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/icons/service-04.png" alt="services" />{" "}
                  <div>
                    <h6>Preços acessíveis</h6>
                    <p className="mb-0">Obtenha os melhores preços</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/icons/service-05.png" alt="services" />{" "}
                  <div>
                    <h6>Pagamentos seguros</h6>
                    <p className="mb-0">Pagamentos 100% protegidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>T-shirts</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/produtos/t-shirt/reserva/reserva.png"
                    alt="camiseta"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Regatas</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/produtos/regata/osklen.png"
                    alt="camiseta regata"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Bermudas</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/produtos/bermuda/tommy/tommy.png"
                    alt="bermuda"
                  />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Calças</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/produtos/calca/lacoste.png"
                    alt="calça jeans"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Coleção em destaque</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous/3-bermudas.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5>3 bermudas Tarja Osklen</h5>
                  <h6>Bermuda Osklen</h6>
                  <p>De R$600,00 por R$480,00</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous/4-regatas.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">4 Regatas Osklen</h5>
                  <h6 className="text-dark">Regata Osklen</h6>
                  <p className="text-dark">De R$400,00 por R$300,00</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous/4-shirts.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">4 camisetas multimarcas</h5>
                  <h6 className="text-dark">Camisetas Multimarcas</h6>
                  <p className="text-dark">De R$480,00 por R$350,00</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous/3-calcas.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">3 calças sarja lacoste</h5>
                  <h6 className="text-dark">Calça Lacoste</h6>
                  <p className="text-dark">De R$900,00 por R$750,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Ofertas especiais</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Outros Produtos Populares</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marquee-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex" gradient="true">
                  <div className="mx-4 w-25 ">
                    <img
                      className="img-wrapper"
                      src="images/logomarcas/adidas.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img
                      className="img-wrapper"
                      src="images/logomarcas/calvin-klein.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img
                      className="img-wrapper"
                      src="images/logomarcas/cavalera.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img
                      className="img-wrapper"
                      src="images/logomarcas/colcci.jpg"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img
                      className="img-wrapper"
                      src="images/logomarcas/diesel.jpg"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img
                      className="img-wrapper"
                      src="images/logomarcas/lacoste.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img
                      className="img-wrapper"
                      src="images/logomarcas/levis.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img
                      className="img-wrapper"
                      src="images/logomarcas/osklen.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img
                      className="img-wrapper"
                      src="images/logomarcas/tommy.png"
                      alt="brand"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Nossos últimos blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
            <div className="col-3">
              <Blogcard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
