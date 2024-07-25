import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Politíca de envio"} />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h3 className="title mb-5 d-flex align-items-center justify-content-center">
                Política de Envio
              </h3>
              <div>
                <h5 className="mt-5 mb-3">1. Introdução</h5>
                <p>
                  Em nome da loja DAP Multimarcas, nos esforçamos para enviar
                  seus pedidos de forma rápida e eficiente. Aqui estão os
                  detalhes sobre nossa política de envio.
                </p>
                <h5 className="mt-5 mb-3">2. Tempo de Processamentos</h5>
                <p>
                  Os pedidos são processados dentro de 3 dias úteis. Não
                  enviamos pedidos aos finais de semana ou feriados.
                </p>
                <h5 className="mt-5 mb-3">3. Taxas de Envio</h5>
                <p>
                  As taxas de envio são calculadas com base no endereço de
                  entrega e no método de envio escolhido. As taxas aplicáveis
                  serão exibidas durante o processo de checkout.
                </p>
                <h5 className="mt-5 mb-3">4. Tempo de Entrega</h5>
                <p>
                  O tempo de entrega varia de acordo com o local de destino e o
                  método de envio selecionado. Fornecemos estimativas de entrega
                  durante o processo de checkout.
                </p>
                <h5 className="mt-5 mb-3">5. Rastreamento de Pedido</h5>
                <p>
                  Você receberá um número de rastreamento por e-mail assim que
                  seu pedido for enviado, permitindo que você acompanhe a
                  entrega.
                </p>
                <h5 className="mt-5 mb-3">6. Risco de Perda</h5>
                <p>
                  O risco de perda ou dano aos produtos passa para o cliente no
                  momento da entrega.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
