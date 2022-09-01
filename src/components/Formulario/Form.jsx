import PropTypes from "prop-types";
import styles from "./Form.module.css";

export const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.formContent}>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};
