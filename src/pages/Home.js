import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Blogcard from "../components/Blogcard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { services } from "../utils/Data";
// <Marque

import brandAdidas from "../images/logomarcas/adidas.jpg";
import brandCalvinKlein from "../images/logomarcas/calvin-klein.jpg";
import brandCavalera from "../images/logomarcas/cavalera.jpg";
import brandColcci from "../images/logomarcas/colcci.jpg";
import brandDiesel from "../images/logomarcas/diesel.jpg";
import brandLacoste from "../images/logomarcas/lacoste.jpg";
import brandLevis from "../images/logomarcas/levis.jpg";
import brandOsklen from "../images/logomarcas/osklen.jpg";
import brandTommy from "../images/logomarcas/tommy.jpg";

// Marque />

// <banner

import mainBanner from "../images/banner/banner-2.png";
import smallBanner1 from "../images/banner/bg-1.png";
import smallBanner2 from "../images/banner/bg-2.png";
import smallBanner3 from "../images/banner/bg-3.png";
import smallBanner4 from "../images/banner/bg-4.png";

// banner />

const Home = () => {
  return (
    <>
      <Meta title={"DAP Multimarcas"} />
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-banner position-relative">
              <img
                src={mainBanner}
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
                  src={smallBanner1}
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
                  src={smallBanner2}
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
                  src={smallBanner3}
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
                  src={smallBanner4}
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
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="service d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.tilte} </h6>
                      <p className="mb-0"> {i.tagline} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
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
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Coleção em destaque</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
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
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
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
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
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
      </Container>
      <Container class1="marquee-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex" gradient="true">
                <div className="mx-4 w-25 ">
                  <img className="img-wrapper" src={brandAdidas} alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img
                    className="img-wrapper"
                    src={brandCalvinKlein}
                    alt="brand"
                  />
                </div>
                <div className="mx-4 w-25 ">
                  <img
                    className="img-wrapper"
                    src={brandCavalera}
                    alt="brand"
                  />
                </div>
                <div className="mx-4 w-25 ">
                  <img className="img-wrapper" src={brandColcci} alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img className="img-wrapper" src={brandDiesel} alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img className="img-wrapper" src={brandLacoste} alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img className="img-wrapper" src={brandLevis} alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img className="img-wrapper" src={brandOsklen} alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img className="img-wrapper" src={brandTommy} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
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
      </Container>
    </>
  );
};

export default Home;
