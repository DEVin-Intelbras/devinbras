import PropTypes from "prop-types";
import styles from "./ImageMini.module.css";

export const ImageMini = ({ image, selected, onClick }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <button className={styles.buttonImageMini} onClick={onClick}>
      <img
        className={`${styles.imageMini} ${
          selected ? styles.imageMiniActive : ""
        }`}
        src={`${baseUrl}/assets/products/${image}`}
        alt="Produto"
      />
    </button>
  );
};

ImageMini.propTypes = {
  image: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
