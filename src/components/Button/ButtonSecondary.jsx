import PropTypes from "prop-types";

import { Loader, loaderSize } from "@components";

import styles from "./Button.module.css";

export const ButtonSecondary = ({
  children,
  onClick,
  fullWidth = false,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles.buttonSecondary} ${
        fullWidth ? styles.fullWidth : ""
      }`}
    >
      {isLoading && (
        <div>
          <Loader size={loaderSize.small} />
        </div>
      )}

      {children}
    </button>
  );
};

ButtonSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};
