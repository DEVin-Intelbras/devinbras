import PropTypes from "prop-types";

import styles from "./Button.module.css";

export const ButtonOutline = ({ children, fullWidth = false, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${styles.button} ${styles.buttonOutline} ${fullWidth ? styles.fullWidth : ""}`}
    >
      {children}
    </a>
  );
};

ButtonOutline.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  link: PropTypes.string.isRequired,
};
