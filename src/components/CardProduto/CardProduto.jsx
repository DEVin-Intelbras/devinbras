import { Card, ButtonOutline } from '@/components';

import styles from './CardProduto.module.css';

export const CardProduto = ({ produto }) => {
  return (
    <li className={styles.li}>
      <Card>
        <div className={styles.container}>
          <img src={produto.image} alt='Imagem do produto' width={149} height={149} />

          <p className={styles.name}>{produto.name}</p>

          <strong className={styles.price}>{produto.price}</strong>

          <ButtonOutline>Ver detalhes</ButtonOutline>
        </div>
      </Card>
    </li>
  );
};
