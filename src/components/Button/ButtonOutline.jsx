import PropTypes from "prop-types";

import { Loader, loaderSize } from "@components";

import styles from "./Button.module.css";

export const ButtonOutline = ({
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
      className={`${styles.button} ${styles.buttonOutline} ${
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

ButtonOutline.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};
