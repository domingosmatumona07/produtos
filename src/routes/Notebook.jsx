import React from "react";
import { ProductInfo } from "../components/ProductInfo";

const api = "https://ranekapi.origamid.dev/json/api/produto/notebook";

export const Notebook = () => {
  return <ProductInfo api={api} />;
};
