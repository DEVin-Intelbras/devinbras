import { produtos } from '@/service/produtos';
import { ButtonOutline, CardProduto } from '@/components';

import styles from './ListaProdutos.module.css';

export const ListaProdutos = () => {
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
