import React from "react";
import { ProductInfo } from "../components/ProductInfo";

const api = "https://ranekapi.origamid.dev/json/api/produto/smartphone";

export const Smartphone = () => {
  return <ProductInfo api={api} />;
};
