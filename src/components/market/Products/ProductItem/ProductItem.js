import React from "react";
import "./ProductItem.scss";

const ProductItem = (props) => {
  const id = props.id;

  return (
    <div className="ProductItem" key={props.productKey}>
      <a href={props.image}>
        <img src={props.image} alt={props.description} />
      </a>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <p>R$ {props.price.toString().replace(".", ",")}</p>
      <button>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductItem;
