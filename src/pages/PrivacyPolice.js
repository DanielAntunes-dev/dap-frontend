import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolice = () => {
  return (
    <>
      <Meta title={"Política de privacidade"} />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h3 className="title mb-5 d-flex align-items-center justify-content-center">
                Política de Privacidade
              </h3>
              <div>
                <h5 className="mt-5 mb-3">1. Introdução</h5>
                <p>
                  Bem-vindo ao DAP Multimarcas! A sua privacidade é importante
                  para nós. Esta Política de Privacidade descreve como
                  coletamos, usamos e protegemos suas informações pessoais.
                </p>
                <h5 className="mt-5 mb-3">2. Coleta de Informações</h5>
                <p>
                  Coletamos informações pessoais que você nos fornece, como
                  nome, endereço de e-mail, endereço de entrega e informações de
                  pagamento.
                </p>
                <h5 className="mt-5 mb-3">3. Uso das Informações</h5>
                <p>
                  Usamos suas informações para processar pedidos, fornecer
                  atendimento ao cliente, enviar atualizações sobre seu pedido e
                  ofertas promocionais, e melhorar nossos serviços
                </p>
                <h5 className="mt-5 mb-3">
                  4. Compartilhamento de Informações
                </h5>
                <p>
                  Não compartilhamos suas informações pessoais com terceiros,
                  exceto conforme necessário para processar seu pedido, cumprir
                  exigências legais ou proteger nossos direitos.
                </p>
                <h5 className="mt-5 mb-3">5. Segurança das Informações</h5>
                <p>
                  Implementamos medidas de segurança para proteger suas
                  informações contra acesso não autorizado, alteração,
                  divulgação ou destruição.
                </p>
                <h5 className="mt-5 mb-3">6. Seus Direitos</h5>
                <p>
                  Você tem o direito de acessar, corrigir ou excluir suas
                  informações pessoais. Para exercer esses direitos, entre em
                  contato conosco através de [informações de contato].
                </p>
                <h5 className="mt-5 mb-3">
                  7. Alterações à Política de Privacidade
                </h5>
                <p>
                  Reservamo-nos o direito de modificar esta Política de
                  Privacidade a qualquer momento. Quaisquer alterações serão
                  publicadas em nosso site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolice;
