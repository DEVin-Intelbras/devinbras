import PropTypes from "prop-types";

import { Card, ButtonOutline } from "@components";

import styles from "./CardProduto.module.css";

export const CardProduto = ({ produto }) => {
  return (
    <li className={styles.li}>
      <Card>
        <div className={styles.container}>
          <img
            src={`assets/products/${produto.image}`}
            alt="Imagem do produto"
            width={149}
            height={149}
          />

          <p className={styles.name}>{produto.name}</p>

          <strong className={styles.price}>
            {`R$ ${produto.price.toFixed(2).replace(".", ",")}`}
          </strong>

          <ButtonOutline
            link={`https://loja.intelbras.com.br/${produto.details}`}
          >
            Ver detalhes
          </ButtonOutline>
        </div>
      </Card>
    </li>
  );
};

CardProduto.propTypes = {
  produto: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    details: PropTypes.string.isRequired,
  }),
};
