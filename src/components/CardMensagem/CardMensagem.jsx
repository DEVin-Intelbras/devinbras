import PropTypes from "prop-types";

import { Card } from "@components";

import styles from "./CardMensagem.module.css";

const color = {
  default: "default",
  erro: "error",
  aviso: "warn",
  info: "info",
};

export const CardMensagem = ({ titulo, mensagem, tipo = "default" }) => {
  return (
    <Card>
      <div className={styles.content}>
        <h3 className={`${styles.title} ${styles[color[tipo]]}`}>{titulo}</h3>
        <span>{mensagem}</span>
      </div>
    </Card>
  );
};

CardMensagem.propTypes = {
  titulo: PropTypes.string.isRequired,
  mensagem: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(["default", "erro", "aviso", "info"]),
};
