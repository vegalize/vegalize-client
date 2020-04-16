import React from "react";
import "./InformationCard.scss";

const InformationCard = ({ icon, subtitle, text }) => {
  return (
    <div className="InformationCard">
      <div>{icon}</div>
      <p className="subtitle">{subtitle}</p>
      <p>{text}</p>
    </div>
  );
};

export default InformationCard;
