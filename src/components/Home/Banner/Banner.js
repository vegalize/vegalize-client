import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";
import { useWindowSizeHook } from "../../../hooks/windowHooks";

const Banner = () => {
  const { height } = useWindowSizeHook();

  return (
    <header style={{ height: height }} className="Banner">
      <div>
        <h1>Vegalize</h1>
        <h4>compra ou venda de produtos orgânicos</h4>
        <Link to="/produtos">
          <button>Comprar</button>
        </Link>
      </div>
      <div />
    </header>
  );
};

export default Banner;
