import React from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"Cadastrar"} />
      <Container class1="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Criar Conta</h3>
              <form className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="Nome" />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput type="tel" name="mobile" placeholder="Telefone" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Senha"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Cadastrar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
