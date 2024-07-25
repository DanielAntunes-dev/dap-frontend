import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Política de reembolso"} />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h3 className="title mb-5 d-flex align-items-center justify-content-center">
                Política de Reembolso
              </h3>
              <div>
                <h5 className="mt-5 mb-3">1. Introdução</h5>
                <p>
                  Em nome da loja DAP Multimarcas, queremos que você fique
                  satisfeito com sua compra. Se por algum motivo você não
                  estiver satisfeito, estamos aqui para ajudar.
                </p>
                <h5 className="mt-5 mb-3">2. Devoluções</h5>
                <p>
                  Você pode devolver um produto dentro de 7 dias a partir da
                  data de entrega. Os produtos devolvidos devem estar em
                  condições originais, não utilizados, com todas as etiquetas e
                  embalagens intactas.
                </p>
                <h5 className="mt-5 mb-3">3. Processo de Devolução</h5>
                <p>
                  Para iniciar uma devolução, entre em contato conosco através
                  de [informações de contato] com o número do pedido e os
                  detalhes do produto que deseja devolver.
                </p>
                <h5 className="mt-5 mb-3">4. Reembolsos</h5>
                <p>
                  Após recebermos e inspecionarmos o produto devolvido,
                  processaremos seu reembolso. Os reembolsos serão feitos usando
                  o método de pagamento original e podem levar até 30 dias úteis
                  para serem processados.
                </p>
                <h5 className="mt-5 mb-3">5. Custos de Devolução</h5>
                <p>
                  Os custos de devolução são de responsabilidade do cliente,
                  salvo disposição em contrário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
