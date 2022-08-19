import React, { useEffect, useState } from "react";
import { ButtonOutline, CardProduto } from "@/components";

import styles from "./ListaProdutos.module.css";

export const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then((dados) => setProdutos(dados));
  }, []);

  return (
    <>
      <ul className={styles.ul}>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </ul>

      <div className={styles.button}>
        <ButtonOutline fullWidth>Mostrar mais...</ButtonOutline>
      </div>
    </>
  );
};
