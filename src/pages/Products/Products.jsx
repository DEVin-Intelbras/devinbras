import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Filters,
  ListaProdutos,
  Loader,
  CardMensagem,
  ButtonPrimary,
} from "@components";
import { NotFound } from "@assets/icons";

import { imageProducts } from "@assets/img";
import { statusType } from "@utils";

import styles from "./Products.module.css";
import { useAutenticacao } from "@contexts";

const URL = import.meta.env.VITE_BASE_URL_API;
const LIMIT = 9;

export const Products = () => {
  const navigate = useNavigate();

  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState(null);
  const [status, setStatus] = useState(statusType.isIdle);
  const [totalProdutos, setTotalProdutos] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setStatus(statusType.isLoading);
    const searchQuery = filtro ? `category=${filtro}&` : "";
    fetch(
      `${URL}/products?${searchQuery}&_sort=name&_page=${page}&_limit=${LIMIT})`,
      { method: "GET" },
    )
      .then((res) => {
        return res.json().then((data) => ({
          data,
          totalProdutos: res.headers.get("X-Total-Count"),
        }));
      })
      .then(({ data, totalProdutos }) => {
        console.log(data);
        setTotalProdutos(totalProdutos);
        setProdutos((prev) => [...prev, ...data]);
        setStatus(statusType.isComplete);
      })
      .catch((err) => {
        console.log(err);
        setStatus(statusType.isError);
      });
  }, [filtro, page]);

  const handleFiltrar = (categoria) => {
    setPage(1);
    setProdutos([]);
    if (filtro === categoria) {
      setFiltro(null);
    } else {
      setFiltro(categoria);
    }
  };

  const handleVerMais = () => {
    setPage((prev) => prev + 1);
  };

  const { isAutenticado } = useAutenticacao();

  return (
    <div className={styles.productsContainer}>
      <section className={`${styles.productsContent} ${styles.header}`}>
        <img
          className={styles.productsContentImg}
          src={imageProducts}
          alt="Imagem contendo uma casa inteligente totalmente conectada, contendo os textos casa inteligente sem mistério e conheça a linha Izy"
        />
      </section>

      <Filters aoFiltrar={handleFiltrar} filtroSelecionado={filtro} />

      <section className={`${styles.productsContent} ${styles.productsList}`}>
        <div className={styles.headerProdutos}>
          <h2 className={styles.productsListTitle}>Produtos</h2>

          {isAutenticado && (
            <ButtonPrimary onClick={() => navigate("/produtos/novo")}>
              Novo Produto
            </ButtonPrimary>
          )}
        </div>

        {!produtos.length && status === statusType.isLoading && <Loader />}

        {!produtos.length && status === statusType.isComplete && (
          <div className={styles.notFound}>
            <NotFound height={300} max-width="100%" />
          </div>
        )}

        {!!produtos.length && (
          <ListaProdutos
            produtos={produtos}
            totalProdutos={totalProdutos}
            onVerMais={handleVerMais}
            isLoadingVerMais={status === statusType.isLoading}
          />
        )}

        {status === statusType.isError && (
          <CardMensagem
            titulo="Erro!"
            mensagem="Erro ao carregar os produtos"
            tipo="erro"
          />
        )}
      </section>
    </div>
  );
};
