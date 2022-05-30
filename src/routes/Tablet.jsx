import React from "react";
import { ProductInfo } from "../components/ProductInfo";

const api = "https://ranekapi.origamid.dev/json/api/produto/tablet";

export const Tablet = () => {
  return <ProductInfo api={api} />;
};
