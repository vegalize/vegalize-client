import React from "react";
import "./Contact.scss";
import { useWindowSizeHook } from "../../../hooks/windowHooks";

const Contact = () => {
  const { height } = useWindowSizeHook();
  return (
    <section className="Contact" style={{ minHeight: height }}>
      <h3>Entre em contato</h3>
      <p>Tem alguma dúvida ou problema? Fale com a gente</p>
      <div>
        <div>
          <h4>Nossas informações</h4>
          <p>avenida paulista 2000 - 5o andar</p>
          <p>+55 (11) 00000-0000</p>
          <p>contato@vezalige.com</p>
          <iframe
            title="Google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2673031606296!2d-46.66106008551874!3d-23.558841384684126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd060ea13b%3A0x7c535e9d9784e6c2!2sAv.%20Paulista%2C%202000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1587078961081!5m2!1spt-BR!2sbr"
            width="350"
            height="300"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
        <div>
          <h4>Envie uma mensagem</h4>
          <input placeholder={"Nome*"} />
          <input placeholder={"Email*"} />
          <textarea placeholder={"Menssagem*"} />
          <button>Enviar</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
