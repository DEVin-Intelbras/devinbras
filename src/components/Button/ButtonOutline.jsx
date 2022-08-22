import PropTypes from "prop-types";

import styles from "./Button.module.css";

export const ButtonOutline = ({ children, fullWidth = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles.buttonOutline} ${fullWidth ? styles.fullWidth : ""}`}
    >
      {children}
    </button>
  );
};

ButtonOutline.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};
