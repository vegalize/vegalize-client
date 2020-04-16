import React from "react";
import "./Information.scss";
import InformationCard from "./InformationCard/InformationCard";
import { ReactComponent as Payment } from "../../../assets/images/payment.svg";

const Information = () => {
  return (
    <section className="Information">
      <InformationCard
        icon={<Payment />}
        subtitle="Economia"
        text="Comprando de produtores locais, você economiza dinheiro"
      />
      <InformationCard
        icon={<Payment />}
        subtitle="Economia"
        text="Comprando de produtores locais, você economiza dinheiro"
      />
      <InformationCard
        icon={<Payment />}
        subtitle="Economia"
        text="Comprando de produtores locais, você economiza dinheiro"
      />
    </section>
  );
};

export default Information;
