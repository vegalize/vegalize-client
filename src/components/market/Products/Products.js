import React from "react";
import "./Products.scss";
import ProductItem from "./ProductItem/ProductItem";

const Products = () => {
  const image =
    "https://static.biologianet.com/conteudo/images/no-abacaxi-parte-comestivel-fruta-desenvolveu-se-diversas-pecas-florais-os-frutos-sao-cada-escama-casca-58f62e2a3fdfd.jpg";
  const items = [
    {
      id: 1,
      title: "Peras",
      description: "fruta criada com mt amor",
      price: 10.55,
      image: image,
    },
    {
      id: 2,
      title: "Maças",
      description: "fruta criada com mt amor",
      price: 10.55,
      image: image,
    },
    {
      id: 3,
      title: "Maças",
      description: "fruta criada com mt amor",
      price: 10.55,
      image: image,
    },
    {
      id: 4,
      title: "Peras",
      description: "fruta criada com mt amor",
      price: 10.55,
      image: image,
    },
    {
      id: 5,
      title: "Maças",
      description: "fruta criada com mt amor",
      price: 10.55,
      image: image,
    },
    {
      id: 6,
      title: "Maças",
      description: "fruta criada com mt amor",
      price: 10.55,
      image: image,
    },
    {
      id: 7,
      title: "Maças",
      description: "fruta criada com mt amor",
      price: 10.55,
      image: image,
    },
    {
      id: 8,
      title: "Maças",
      description: "fruta criada com mt amor",
      price: 10.55,
      image: image,
    },
  ];

  return (
    <section className="Products">
      {items.map((product, key) => (
        <ProductItem
          productKey={key}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </section>
  );
};

export default Products;
