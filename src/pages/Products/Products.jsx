import { Filters, ListaProdutos, Loader, CardMensagem } from "@components";
import { NotFound } from "@assets/icons";
import { useProdutos, statusType } from "@hooks";

import { imageProducts } from "@assets/img";
import styles from "./Products.module.css";

export const Products = () => {
  const {
    status,
    produtos,
    handleFiltrar,
    filtro,
    totalProdutos,
    handleVerMais,
  } = useProdutos();

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
        <h2 className={styles.productsListTitle}>Produtos</h2>

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
