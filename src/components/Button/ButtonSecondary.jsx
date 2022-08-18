import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const ButtonSecondary = ({ children, fullWidth = false }) => {
  return (
    <button
      className={`${styles.button} ${styles.buttonSecondary} ${fullWidth ? styles.fullWidth : ''}`}
    >
      {children}
    </button>
  );
};

ButtonSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
};
