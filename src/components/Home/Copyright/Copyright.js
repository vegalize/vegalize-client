import React from "react";
import "./Copyright.scss";

const Copyright = () => {
  return (
    <div className="Copyright">
      <p>&copy; Copyright Vegalize {new Date().getUTCFullYear()}</p>
    </div>
  );
};
export default Copyright;
