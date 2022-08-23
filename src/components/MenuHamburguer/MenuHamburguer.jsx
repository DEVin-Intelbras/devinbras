import PropTypes from "prop-types";

import styles from "./MenuHamburguer.module.css";

export const MenuHamburguer = ({ onClick }) => (
  <button className={styles.buttonHamburguer} onClick={onClick}>
    <div className={styles.hamburguer}></div>
    <div className={styles.hamburguer}></div>
    <div className={styles.hamburguer}></div>
  </button>
);

MenuHamburguer.propTypes = {
  onClick: PropTypes.func,
};
