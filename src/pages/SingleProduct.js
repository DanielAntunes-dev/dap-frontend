import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { GoGitCompare } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import Meta from "../components/Meta";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 600,
    img: "/images/produtos/t-shirt/acostamento/1.jpg",
  };
  const [orderedProduct] = useState(true);
  // , setorderedProduct

  const copyToClipboard = (text) => {
    let textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Produto"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} className="img-fluid" />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="/images/produtos/t-shirt/acostamento/2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="/images/produtos/t-shirt/acostamento/3.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="/images/produtos/t-shirt/acostamento/4.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="/images/produtos/t-shirt/acostamento/5.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">Camiseta Acostamento Casual </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">R$ 120,00</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Avaliações)</p>
                </div>
                <a href="#review" className="review-btn">
                  Deixe uma avaliação
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Camiseta</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Marca :</h3>
                  <p className="product-data">Acostamento</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Categoria :</h3>
                  <p className="product-data">Camiseta</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Camiseta Acostamento</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Disponibilidade :</h3>
                  <p className="product-data">Disponível</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Tamanho :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      P
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      G
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      GG
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Cor :</h3>
                  <Color />
                </div>
                <div className="d-flex  gap-15 flex-row mt-5 mb-3">
                  <h3 className="product-heading">Qtd :</h3>
                  <div className="">
                    <input
                      type="number"
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                    ></input>
                  </div>
                  <div className="d-flex alig-items-center gap-15 ms-3 mb-3">
                    <button className="button border-0" type="submit">
                      Adicionar ao carrinho
                    </button>
                    <button type="" className="button signup">
                      Comprar agora
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 mb-4">
                  <div>
                    <a href="##">
                      <GoGitCompare className="fs-5 me-1" /> Adicione e compare
                    </a>
                  </div>
                  <div>
                    <a href="##">
                      <IoMdHeartEmpty className="fs-5 me-1" /> Adicione aos
                      Favoritos
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 my-2 mb-5 ">
                  <h3 className="product-heading">Entrega e devolução</h3>
                  <p className="product-data">
                    Os pedidos são processados dentro de
                    <b> 3 dias úteis.</b>
                    <br />
                    Não enviamos pedidos aos finais de semana ou feriados. Você
                    pode devolver um produto dentro de
                    <b> 7 dias</b> a partir da data de entrega. Os produtos
                    devolvidos devem estar em condições originais, não
                    utilizados, com todas as etiquetas e embalagens intactas.
                  </p>
                </div>
                <div className="d-flex flex-column gap-10 my-2  ">
                  <h3 className="product-heading">Link do produto</h3>
                  <a
                    href="##"
                    onClick={() => {
                      copyToClipboard(
                        "/images/produtos/t-shirt/acostamento/1.jpg"
                      );
                    }}
                  >
                    Copiar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Descrição</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ullamcorper sit amet mi eu vehicula. Suspendisse
                iaculis tellus arcu, a bibendum lacus porta vitae. Donec at
                mollis magna.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Avaliações</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Avaliações de Clientes</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">2 Avaliações</p>
                  </div>
                </div>

                {orderedProduct && (
                  <div>
                    <a
                      href="##"
                      className="text-dark text-decoration-underline"
                    >
                      Deixe uma avaliação
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4 className="mb-2">Deixe uma avaliação</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>

                  <div>
                    <textarea
                      name=""
                      cols="30"
                      className="w-100 form-control"
                      rows="4"
                      placeholder="Mensagem"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">
                      Enviar Avaliação
                    </button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Exemplo</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Nulla interdum a neque vitae lobortis. Sed accumsan
                    scelerisque mollis. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                    Phasellus id enim in arcu porttitor rutrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
