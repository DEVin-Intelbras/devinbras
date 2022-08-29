import PropTypes from "prop-types";

import styles from "./Loader.module.css";

export const loaderSize = {
  small: "Small",
  large: "Large",
};

export const Loader = ({ size = loaderSize.large }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.spinner} ${styles[`loader${size}`]}`}></div>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf([loaderSize.large, loaderSize.small]),
};
