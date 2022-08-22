import { Filters, ListaProdutos, Loader, CardMensagem } from "@/components";
import { useProdutos, statusType } from "@hooks/useProdutos";

import image from "@/assets/img/products.png";
import styles from "./Products.module.css";

export const Products = () => {
  const { status, produtos, filtro, handleFiltrar } = useProdutos();

  return (
    <div className={styles.productsContainer}>
      <section className={`${styles.productsContent} ${styles.header}`}>
        <img
          className={styles.productsContentImg}
          src={image}
          alt="Imagem contendo uma casa inteligente totalmente conectada, contendo os textos casa inteligente sem mistério e conheça a linha Izy"
        />
      </section>

      <Filters aoFiltrar={handleFiltrar} />

      <section className={`${styles.productsContent} ${styles.productsList}`}>
        <h2 className={styles.productsListTitle}>Produtos</h2>
        {status === statusType.isLoading && <Loader />}
        {status === statusType.isComplete && <ListaProdutos produtos={produtos} />}
        {status === statusType.isError && (
          <CardMensagem titulo="Erro!" mensagem="Erro ao carregar os produtos" tipo="erro" />
        )}
      </section>
    </div>
  );
};
