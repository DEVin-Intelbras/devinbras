import PropTypes from "prop-types";

import styles from "./InputGroup.module.css";

export const InputGroup = ({ children, label, erro }) => {
  return (
    <div className={`${styles.fieldSet} ${!!erro && styles.error}`}>
      <label className={styles.label}>
        {label}
        {children}
      </label>
      {!!erro && <span className={`${styles.message}`}>{erro}</span>}
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  erro: PropTypes.string,
  children: PropTypes.node.isRequired,
};
