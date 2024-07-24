import React from "react";
import Meta from "../components/Meta";

import { FaHome, FaPhone, FaInfo } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Meta title={"Contato"} />

      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572.6622695294225!2d-40.314185307981994!3d-20.364644639294212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83e04a611ed85%3A0x52d24c880af4cafc!2sAv.%20S%C3%A9rgio%20Cardoso%2C%2040%20-%20Vila%20Nova%2C%20Vila%20Velha%20-%20ES%2C%2029105-020!5e0!3m2!1spt-BR!2sbr!4v1721421048854!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contato</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                      ></input>
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      ></input>
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Telefone"
                      ></input>
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
                    <div>
                      <button className="button border-0">Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">
                    Entre em contato conosco
                  </h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaHome className="f-5 " />
                        <address className="mb-0">
                          Avenida Sergio Cardoso, 40 - Vila Nova, Vila Velha -
                          ES/BR
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaPhone className="f-5" />
                        <a href="tel:+55 27981571426">(27) 98157-1426</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <IoMdMail className="f-5" />
                        <a href="mailto:dap.junioruv@gmail.com">
                          dap.junioruv@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaInfo className="f-5" />
                        <p className="mb-0">Segunda - 22/07 - 14:22</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
