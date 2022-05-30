import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductInfo = ({ api }) => {
  const [datas, setDatas] = useState(null);
  const [carregando, setCarregando] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setCarregando(true);
        const response = await axios.get(api);
        const data = await response.data;

        setDatas(data);
        setCarregando(false);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [api]);

  return (
    <section>
      {carregando && (
        <p>
          <strong>Carregando...</strong>
        </p>
      )}
      {datas && !carregando && (
        <>
          <h1>{datas.nome}</h1>
          <p>R$ {datas.preco}</p>
          <img
            src={datas.fotos[0].src}
            alt={datas.fotos[0].titulo}
            style={{ width: "400px", height: "500px" }}
          />
        </>
      )}
    </section>
  );
};
