import PropTypes from "prop-types";
import styles from "./ImageMini.module.css";

export const ImageMini = ({ image, selected, onClick }) => (
  <button className={styles.buttonImageMini} onClick={onClick}>
    <img
      className={`${styles.imageMini} ${
        selected ? styles.imageMiniActive : ""
      }`}
      src={`assets/products/${image}`}
      alt="Produto"
    />
  </button>
);

ImageMini.propTypes = {
  image: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
