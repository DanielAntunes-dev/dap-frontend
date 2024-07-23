import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/icons/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Inscreva-se para novidades</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Seu endereço de email"
                  aria-label="Seu endereço de email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Inscreva-se
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contate-nos</h4>
              <div>
                <address className="text-white fs-6">
                  Vila Nova, Vila Velha - ES <br />
                  29105-075
                </address>
                <a
                  href="tel:+55 27981571426"
                  className="mt-3 d-block mb-1 text-white"
                >
                  27 981571426
                </a>
                <a
                  href="mailto:dap.junioruvv@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  dap.junioruvv@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a
                    className="text-white"
                    href="https://www.linkedin.com/in/daniel-antunespj/"
                    target="blank"
                  >
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://github.com/DanielAntunes-dev"
                    target="blank"
                  >
                    <BsGithub className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.facebook.com/juninkun/"
                    target="blank"
                  >
                    <BsFacebook className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.instagram.com/daniieljuniior_/"
                    target="blank"
                  >
                    <BsInstagram className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://x.com/DanielJ06192238"
                    target="blank"
                  >
                    <BsTwitterX className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.youtube.com/"
                    target="blank"
                  >
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informações</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Política de privacidade
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Política de reembolso
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Política de envio
                </Link>
                <Link to="/terms-conditions" className="text-white py-2 mb-1">
                  Termos & condições
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Conta</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sobre mim</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contato</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Links rápidos</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">T-shirts</Link>
                <Link className="text-white py-2 mb-1">Bermudas</Link>
                <Link className="text-white py-2 mb-1">Calças</Link>
                <Link className="text-white py-2 mb-1">Cuecas</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Developer Daniel Antunes
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
