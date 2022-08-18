import { Filters, ListaProdutos } from '@/components';

import image from '@/assets/img/products.png';

import styles from './Products.module.css';

export const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <section className={`${styles.productsContent} ${styles.header}`}>
        <img
          className={styles.productsContentImg}
          src={image}
          alt='Imagem contendo uma casa inteligente totalmente conectada, contendo os textos casa inteligente sem mistério e conheça a linha Izy'
        />
      </section>

      <Filters />

      <section className={`${styles.productsContent} ${styles.productsList}`}>
        <h2 className={styles.productsListTitle}>Produtos</h2>

        <ListaProdutos />
      </section>
    </div>
  );
};
