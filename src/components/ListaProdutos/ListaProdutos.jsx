import PropTypes from "prop-types";
import { ButtonOutline, CardProduto } from "@/components";

import styles from "./ListaProdutos.module.css";

export const ListaProdutos = ({ produtos }) => {
  return (
    <>
      <ul className={styles.ul}>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </ul>

      <div className={styles.button}>
        <ButtonOutline fullWidth link="#">
          Mostrar mais...
        </ButtonOutline>
      </div>
    </>
  );
};

ListaProdutos.propTypes = {
  produtos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    })
  ),
};
