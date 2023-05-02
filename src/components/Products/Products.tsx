import React from 'react';
import "./Products.css";
import { Data } from '../Types/types';


interface ProductProps {
  product: Data;
  openModal: (id: string) => void;
}

export const Products = (props: ProductProps) => {
  return (
    <div
      className="product__item"
      onClick={() => {
        props.openModal(props.product.id);
      }}
    >
      <div
        className="product__img"
        style={{ backgroundImage: `url(${props.product.urls.thumb})` }}
      ></div>
    </div>
  );
}
